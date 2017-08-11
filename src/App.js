import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {addTodo, deleteTodo } from './actions/todo'


class App extends Component {
  addTodo = () => {
    this.props.addTodo({})
  }
  deleteTodo = () => {
    this.props.deleteTodo({})
  }
  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello there {this.props.name}
        <div>
          <ul>
                         { 
                   this.props.todos.map((todo) =>
                   (
                      <li key={todo.id}>
                          {todo.task}
                      </li>
                   ))}
            </ul>
        </div>
      </div>
    );
  }
}

// With this we shape the data for the component
function mapStateToProps(todoList) {
  return {
    name: todoList.name,
    todos: todoList.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addTodo: (data) => dispatch(addTodo(data)),
    deleteTodo: (data) => dispatch(deleteTodo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
