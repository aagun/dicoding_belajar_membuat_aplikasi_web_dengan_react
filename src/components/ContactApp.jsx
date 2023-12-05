// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactList from "./ContactList.jsx";
import {getData} from "../utils/data.js";
import {generateId} from "../utils/utils.js";
import ContactInput from "./ContactInput.jsx";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((previousState) => {
      const contacts = previousState.contacts.filter(contact => contact.id !== id);
      return { contacts };
    })
  }

  onAddContactHandler({name, tag}) {
    this.setState((previousState) => ({
      contacts: [
        ...previousState.contacts,
        {
          id: generateId(),
          name,
          tag,
          imageUrl: '/images/default.jpg'
        }
      ]
    }))
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }
}

export default ContactApp;