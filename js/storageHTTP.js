import { getTodo, delTodo } from "./http"

export const storageHTTP = {
    async getTodo() {
        const todoList = await getTodo()
        return todoList.data
    },
    async delTodo(todo) {
        return await delTodo(todo.id)
    },
}
