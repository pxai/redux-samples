function todoReducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          ...state.todos,
          ...action.todo
      };
    case 'DELETE_TODO':
      return state.todos.filter(elem => elem.id !== action.todo.id);
    case 'UPDATE_TODO':
      return state.todos.map( (elem) => {
                if(elem.id !== action.todo.id) {
                    // This isn't the item we care about - keep it as-is
                    return item;
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