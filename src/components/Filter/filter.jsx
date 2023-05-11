import React from 'react';
import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <p className={css.filterTitle}>Find contacts by name</p>
    <input
      className={css.inputField}
      type="text"
      value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
      onChange={onChange}
    />
  </div>
);
Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}