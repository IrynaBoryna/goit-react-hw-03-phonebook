import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label} htmlFor={nanoid()}>
            <p className={css.textLabel}>Name</p>
            <input
              className={css.inputField}
              id={nanoid()}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label className={css.label} htmlFor={nanoid()}>
            <p className={css.textLabel}>Number</p>
            <input
              className={css.inputField}
              id={nanoid()}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
