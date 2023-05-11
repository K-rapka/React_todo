import React, { useState } from "react";
import { addItemStorage } from "../services/services";


const AddBar = ({getUpdate, updateStatus}) => {
    const addTask = ()=>{
        if(task == ''){
            alert('Empty input field ')
            return
        }
        getUpdate(!updateStatus)
        addItemStorage(task)
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