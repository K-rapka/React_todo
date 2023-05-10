import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import AddBar from './add-bar/AddBar'
import TodoList from './todo-list/TodoList'

const root = ReactDOM.createRoot(document.getElementById('root'))

const TodoApp = ()=>{
    const [update,getUpdate] = useState(true)
    return(
        <div>
            <h1>To Do App</h1>
            <AddBar getUpdate = {getUpdate} updateStatus = {update}/>
            <TodoList/>
        </div>
    )
}
root.render(<TodoApp/>)
