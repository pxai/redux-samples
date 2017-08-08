import  React  from 'react'

class Home extends React.Component {
    render () {
        return (
            <div id="home">
                Welcome home
                
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