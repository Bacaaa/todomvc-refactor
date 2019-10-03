import axios from "axios"

export const getTodo = (id = '') => {
    return axios.get(`http://localhost:3000/todos${!!id ? "/" + id : ""}`)
}

export const addTodo = data => {
    return axios.post("http://localhost:3000/todos", data)
}

export const updateTodo = data => {
    return axios.put("http://localhost:3000/todos", data)
}
