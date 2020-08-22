import React, { Component } from 'react';
import './App.css';
import Cardlis from './components/cardlist/cardlist'
import Ser from './components/search/search'

class App extends Component{
  state={
    monsters:[],
    ser:""
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(respose=>respose.json())
    .then(users=>this.setState({monsters:users}))
  }
  changer=(event)=>{
    console.log(event.target.value)
    this.setState({ser:event.target.value})
  }
  render(){
    let ar=[...this.state.monsters]
    let q=ar.filter(item=>{
      return (item.name.toLowerCase().includes(this.state.ser))
    })
    console.log(q);
    return(
      <div className="App">
      <h1>MONSTER PRODUCER</h1>
      <Ser plahol="Search your Monster here" updater={this.changer} ></Ser>
      <Cardlis mons={q}>
      </Cardlis>
      </div>
    )
  }
}

export default App;
