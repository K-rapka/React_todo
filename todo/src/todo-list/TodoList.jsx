import React from "react";
import { getStorage, updateCompleteStatus, deleteTask } from "../services/services";


const TodoList = ({getUpdate,updateStatus}) => {
    let tasks = getStorage()



    if (tasks === null || tasks.length == 0) {
        return (
            <ul className="list">
                <li className="empty">No tasks</li>
            </ul>
        )
    }
    else {
        let elemTasks = tasks.map((task) => {
            return (<li key={task.id} className="listItem">
                <span>{task.text}</span>
                <input type="checkbox" defaultChecked={task.complete} onClick={() => updateCompleteStatus(task.id)} />
                <button onClick={() => {
                    getUpdate(!updateStatus)
                    deleteTask(task.id)
                }}></button>
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