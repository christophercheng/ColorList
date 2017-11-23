import PropTypes from 'prop-types';
import React from 'react';
import './../../stylesheets/AddColorForm.css';

const AddColorForm = ({ handleAdd }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleAdd(this.title.value, this.color.value);
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
  handleAdd: PropTypes.func.isRequired,
};

export default AddColorForm;
