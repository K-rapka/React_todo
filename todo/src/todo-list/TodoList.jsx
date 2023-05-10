import React from "react";
import { getStorage } from "../services/services";


const TodoList = () => {
    let tasks = getStorage()

    if (tasks === null) {
        return (
            <ul className="list">
                <li className="empty">No tasks</li>
            </ul>
        )
    }
    else {
        let elemTasks = tasks.map((task)=>{
            return(<li key={task.id} className="listItem">
                <span>{task.text}</span>
                <input type="checkbox" defaultChecked={task.complete}/>
            </li>)
        })
        return (
            <ul className="list">
                {elemTasks}
            </ul>
        )
    }
}
export default TodoList