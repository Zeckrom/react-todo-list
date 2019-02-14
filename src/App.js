import React, { Component } from 'react';
import Todo from './Todo'
import './App.scss';

class App extends Component {
  state = {
    todos: [],
    value: ''
  }

  onInputChange = (value) => {
    if (isNaN(Number(value[value.length - 1]))){
      this.setState({
        value: value 
      })
    }
  }

  clearInputValue = () => {
    this.setState({
      value: ''
    })
  }

  addTodo = (todo) => {
      const newTodos = [...this.state.todos, todo]
      this.setState({
        todos: newTodos
      })
      this.clearInputValue()
  }

  deleteTodo = (index) => {
    const newTodos = this.state.todos.filter( (todo, i) => i !== index)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {value, todos} = this.state
    return (
      <div className="App">
       <h1>simple todo list</h1>
       <div>
       <input
          value={value}
          type="text"
          onChange={(e) => {
            this.onInputChange(e.target.value)
          }}
       />
       <button
          onClick={() => {
            this.addTodo(value)
          }}
       >add</button>
       </div>
       <div className="todos">
          { 
            todos.map( (todo, index) => {
              return  (
              <Todo 
                todo={todo}
                index={index}
                deleteTodo={this.deleteTodo}
              />
            )
            })
          }
       </div>
      </div>
    );
  }
}

export default App;
