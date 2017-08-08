import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addTodo, deleteTodo } from './actions/todo';
import  Home  from './Home'
import  About  from './About';
import './App.css';


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

        <Route path="/" exact render={() => (
          <Home todos={this.props.todos} />
        )}/>
        <Route path="/about" exact render={() => (
          <About />
        )}/>
            <div className="link-top">
              <Link to='/' className='open-search'>Home</Link>
            </div>
            <div className="link-bottom">
              <Link to='/about' className='add-book'>About this</Link>
            </div>
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
