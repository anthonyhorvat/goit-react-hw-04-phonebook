import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormInput, InputName, NeonButton } from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = this.state;

    const id = nanoid();
    const newContact = { id, name, number };

    this.props.addContact(newContact);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleAddContact}>
        <InputName>Name</InputName>
        <FormInput
          type="text"
          name="name"
          onChange={this.handleInputChange}
          placeholder="Enter name"
          required
        />
        <InputName>Number</InputName>
        <FormInput
          type="text"
          name="number"
          onChange={this.handleInputChange}
          placeholder="Enter number"
          required
        />
        <NeonButton type="submit">Add contact</NeonButton>
      </form>
    );
  }
}

export default ContactForm;
