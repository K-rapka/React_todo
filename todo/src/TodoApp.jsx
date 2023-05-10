import React from 'react'
import ReactDOM from 'react-dom/client'

import AddBar from './add-bar/AddBar'
import TodoList from './todo-list/TodoList'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <h1>To Do App</h1>
        <AddBar/>
        <TodoList/>
    </div>
)
