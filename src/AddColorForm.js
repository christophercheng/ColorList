import PropTypes from 'prop-types';
import React from 'react';
import { addColor } from './redux/action_creators';
import './stylesheets/AddColorForm.css';

const AddColorForm = ({ store }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addColor(this.title.value, this.color.value));
    this.title.value = '';
    this.color.value = '#000000';
    this.title.focus();
  };

  return (
    <form className="add-color" onSubmit={onSubmit}>
      <input
        type="text"
        ref={(el) => { this.title = el; }}
        placeholder="color title...."
        required
      />
      <input
        type="color"
        required
        ref={(input) => { this.color = input; }}
      />
      <button>Add</button>
    </form>
  );
};

AddColorForm.propTypes = {
  store: PropTypes.object, // eslint-disable-line
};

export default AddColorForm;
