const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo
    }
}

function updateTodo (todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}