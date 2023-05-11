export const getStorage = () => {
    let storage = localStorage.getItem('tasks')
    if (storage == null) {
        return null
    }
    else {
        return JSON.parse(storage)
    }
}

export const addItemStorage = (value) => {
    if (localStorage.getItem('tasks') == null) {
        localStorage.setItem('tasks', JSON.stringify([{
            text: value,
            id: 0,
            complete: false
        }]))
    }
    else {
        let arr = getStorage()
        let newArr = [...arr, {
            text: value,
            id: arr.length,
            complete: false
        }]
        localStorage.setItem('tasks', JSON.stringify(newArr))
    }
}

export const updateCompleteStatus = (id) => {
    let arr = getStorage();
    arr[id].complete = !arr[id].complete
    localStorage.setItem('tasks', JSON.stringify(arr))
}

export const deleteTask = (id) => {
    let arr = getStorage();
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].id == id) {
        }
        else {
            arr[index].id = newArr.length
            newArr.push(arr[index])
        }
    }
    localStorage.setItem('tasks', JSON.stringify(newArr))
}