export const getStorage = () => {
    let storage = localStorage.getItem('tasks')
    if(storage == null){
        return null
    }
    else{
        return JSON.parse(storage)
    }
}

export const updateStorage = (value) =>{
    if(localStorage.getItem('tasks') == null){
        localStorage.setItem('tasks', JSON.stringify([{
            text:value,
            id:0,
            complete: false
        }]))
    }
    else{
        let arr = getStorage()
        let newArr = [...arr, {
            text:value,
            id: (arr.length + 1),
            complete: false
        }]
        localStorage.setItem('tasks',JSON.stringify(newArr))
    }
}