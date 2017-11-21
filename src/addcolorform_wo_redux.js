import PropTypes from 'prop-types';
import React from 'react';

/*
class AddColorForm extends Component {
  static propTypes={
    onNewColorFN: PropTypes.func
  }

  static defaultProps={
    onNewColorFN:f=>console.log("oh my god")
  }

  submit= e =>{
    //const { _title,_color}=this.refs
    e.preventDefault();
    //alert(`New Color: ${this.refs._title.value} ${this.refs._color.value}`)
    this.props.onNewColorFN(this.refs._title.value,this.refs._color.value)
    this.refs._title.value='heyheyhey'
    this.refs._color.value='#000000'
    this.refs._title.focus();
  }
  render(){
    return (

      <form onSubmit={this.submit}>
        <input type="text" ref="_title"
          placeholder="color ttile..." required/>
        <input ref="_color" type="color" required/>
        <button>Add</button>
      </form>

    )

  }
}
*/

const alertFN = () => alert("no function set")

const AddColorForm = ({onNewColorFN=alertFN}) =>{
  let _title,_color
  const onSubmit = e => {
    e.preventDefault()
    onNewColorFN(_title.value,_color.value)
    _title.value=''
    _color.value='#000000'
    _title.focus()
  }
  return (

    <form onSubmit = {onSubmit}>
      <input type="text"
          ref={el => _title=el}
          placeholder="color title...." required/>
      <input type="color" required
        ref={input=>_color=input}/>
      <button>Add</button>
    </form>
  )

}

AddColorForm.propTypes = {
  onNewColorFN : PropTypes.func.isRequired
}


export default AddColorForm