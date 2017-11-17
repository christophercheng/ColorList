import React, { Component } from 'react';
import StatelessMessage from './message'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showIndex:0,
      messages:[
        "what the hey",
        "like totally man",
        "you like big buts and you cannot lie"
      ]}
  }


  componentWillMount(){
    /*
    this.interval = setInterval(()=>{
      let {showIndex,messages} = this.state
      if (++showIndex === messages.length)
        showIndex = 0
      this.setState({showIndex}) 
    },1000)
    setInterval(()=>{clearInterval(this.interval)},2000)
  */
  }

  componentWillUnmount(){
   // clearInterval(this.interval)
  }


  
  showMe=(index)=>{
    this.setState({...this.state,showIndex:index})
  }
  render(){
    return (
      <div className="hidden-msgs">
        {this.state.messages.map((el,index)=>
          <StatelessMessage onMouseEnter={()=>this.showMe(index)} key={index} show={this.state.showIndex===index}>
            {el}
          </StatelessMessage>
        )}
      </div>

      )
  }
    componentWillUpdate(){
    console.log("Updating all messages...")
  }
}

export default App;
