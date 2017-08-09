function todoReducer (state, action) {
  switch (action.type) {
    case 'DELETE_TODO' :
      return state.todos.filter(elem => elem.id !== action.todo.id);
    default: 
        return state;
  }
}

/*
// Sample
const result = appReducer ([{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]
                            , {type: 'DELETE_FLAVOR', flavor: 'Vanilla'});
                            */