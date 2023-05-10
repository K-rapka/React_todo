import React, { useState } from "react";
import { updateStorage } from "../services/services";


const AddBar = ({getUpdate, updateStatus}) => {
    const addTask = ()=>{
        if(task == ''){
            alert('Empty input field ')
            return
        }
        getUpdate(!updateStatus)
        updateStorage(task)
        setTask('')
    }

    const [task, setTask] = useState('')
    return (<div className="addBar">
        <input type="text" name="input" onChange={e => setTask(e.target.value)} value={task}/>
        <button onClick={() => {addTask()
        }}>+</button>
    </div>)
}

export default AddBar