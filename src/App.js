import React from 'react';
import {CardList} from './components/card-list/card-list-component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users =>this.setState({monsters:users}))
    .catch(err => console.log('There is an error'))
  }
  render(){
    return (
      <div className="App">
        <input type="text" placeholder='Monsters' onChange={e => this.setState({searchField:e.target.value})}/>
        <CardList monsters={this.state.monsters}/>
      </div>
    );

  }
}


export default App;
