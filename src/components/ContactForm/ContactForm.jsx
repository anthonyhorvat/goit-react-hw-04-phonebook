import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormInput, InputName, NeonButton } from './ContactForm.styled';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = event => {
    event.preventDefault();

    if (!name || !number) return;

    const id = nanoid();
    const newContact = { id, name, number };

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleAddContact}>
      <InputName>Name</InputName>
      <FormInput
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
        required
      />
      <InputName>Number</InputName>
      <FormInput
        type="text"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter number"
        required
      />
      <NeonButton type="submit">Add contact</NeonButton>
    </form>
  );
};

export default ContactForm;

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { FormInput, InputName, NeonButton } from './ContactForm.styled';
// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleAddContact = event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const { name, number } = this.state;

//     const id = nanoid();
//     const newContact = { id, name, number };

//     this.props.addContact(newContact);
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleAddContact}>
//         <InputName>Name</InputName>
//         <FormInput
//           type="text"
//           name="name"
//           onChange={this.handleInputChange}
//           placeholder="Enter name"
//           required
//         />
//         <InputName>Number</InputName>
//         <FormInput
//           type="text"
//           name="number"
//           onChange={this.handleInputChange}
//           placeholder="Enter number"
//           required
//         />
//         <NeonButton type="submit">Add contact</NeonButton>
//       </form>
//     );
//   }
// }

// export default ContactForm;
