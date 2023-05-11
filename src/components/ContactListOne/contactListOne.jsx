import css from './contactListOne.module.css';
import PropTypes from 'prop-types';

export const Item = ({ name, number, id, onClick }) => {
  return (
    <li id={id} className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button className={css.itemButton} type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
Item.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
