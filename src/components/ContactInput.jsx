// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars
class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: ''
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    event.preventDefault();
    this.setState(() => ({name: event.target.value}));
  }

  onTagChangeEventHandler(event) {
    event.preventDefault();
    this.setState(() => ({tag: event.target.value}));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;