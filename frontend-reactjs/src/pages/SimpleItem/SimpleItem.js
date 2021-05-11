import React, { Component } from 'react';
import Item from './Item/Item'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './SimpleItem.css';

library.add(faTrash)

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      initId: 1,
      todoItems: []

    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const text = this.state.text;
    const newId = this.state.todoItems.length + 1
    const todo = {name: text, id: newId};
    const updatedTodo = [...this.state.todoItems, todo]
    this.setState({
      text:'',
      todoItems: updatedTodo
    })
  }
  handleInput(e){
    this.setState({
      text: e.target.value
    })
  }
  deleteItem(id){
    const filteredItems= this.state.todoItems.filter(item =>
      item.id!==id);
    this.setState({
      todoItems: filteredItems
    })

  }
 render(){

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Add Item" value= {this.state.text} onChange={this.handleInput}></input>
          <br></br>
          <button type="submit">Add</button>
        </form>
        <Item items={(this.state.todoItems)} deleteItem={this.deleteItem}/>
      </header>
    </div>
  );
 }
}


export default Home;