import React from 'react';

export default class Add extends React.Component {
  handleAdd = e => {
    e.preventDefault();
    this.props.onAdd(this.input.target.value);
  }

  render() {
    return (
      <form>
        <input
          refs={input => this.input = input}
          type="text"
          name="name"
          value={this.state.name}
        />
        <button onClick={this.handleAdd}>Add</button>
      </form>
    );
  }
}

