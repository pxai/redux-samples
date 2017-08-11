import  React  from 'react'

class Home extends React.Component {

    addTask (e) {
         e.preventDefault();
        console.log(e);
    }
    render () {
        return (
            <div id="home">
                Welcome home
        <form onSubmit={this.addTask}>
          <label>Task</label><br />
          <input type="text" ref="task"  /><br />
          <button>Generate</button>
        </form>
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
        )
    }
}
export default Home