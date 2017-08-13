import  React  from 'react'

class Home extends React.Component {

    addTask = (e) =>  {
        e.preventDefault();
        console.log("Value in component: ", this.refs.task.value);
        this.props.addTodo({"id":666, "task":this.refs.task.value});
    }

    render () {
        return (
            <div id="home">
                Welcome home
            <form onSubmit={this.addTask}>
                <label>Task</label><br />
                <input type="text" ref="task"  /><br />
                 <button>Create</button>
            </form>
          <ul>
                { 
                   this.props.todos.map((todo) =>
                   (
                      <li key={todo.id} onClick={this.props.deleteTodo(todo)}>
                          {todo.task}
                      </li>
                   ))}
            </ul>
            
                </div>
        )
    }
}
export default Home