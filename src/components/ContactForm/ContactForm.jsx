import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const isContactExists = this.props.addContact({
      id: nanoid(6),
      ...this.state,
    });
    if (!isContactExists) {
      this.reset();
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.formLabelBox}>
          <label className={css.formLabel}>
            Name <input
              className={css.formInput}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
            />
          </label>
          <label className={css.formLabel}>
            Number <input
              className={css.formInput}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
            />
          </label>
        </div>
        <button className={css.formButton} type="submit">Add Contact</button>
      </form>
    );
  }
}