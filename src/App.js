import React from 'react';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e)=>{
    this.setState({searchField:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users =>this.setState({monsters:users}))
    .catch(err => console.log('There is an error'))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );

  }
}


export default App;
