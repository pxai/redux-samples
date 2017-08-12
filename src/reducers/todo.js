import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from '../actions/todo'

const initialTodoState = {
  name: 'My ToDo List',
  todos: [
    {"id": 1, "task": "Learn Redux"},
    {"id": 2, "task": "Learn Ruby"}
    ]
};

export default function todoList (state = initialTodoState, action) {

  switch (action.type) {
    case ADD_TODO:
   console.log('Todo list action:', action.todo.todo.id)
      return {
          ...state, 
            todos: [
              ...state.todos,
              action.todo.todo
          ]
      };
    case DELETE_TODO:
      return state.todos.filter(elem => elem.id !== action.todo.id);
    case UPDATE_TODO:
      return state.todos.map( (elem) => {
                if(elem.id !== action.todo.id) {
                    // This isn't the item we care about - keep it as-is
                    return elem;
                }
                
                // Otherwise, this is the one we want - return an updated value
                return {
                    ...elem,
                    ...action.todo
                };    
            });
    default: 
        return state;
  }
}

/*
// Sample
const result = appReducer ([{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]
                            , {type: 'DELETE_FLAVOR', flavor: 'Vanilla'});
                            */