import {createContext, useState} from "react";

const Todocontext = createContext()


const TodoProvider = ({children}) => {
    const [todo, setTodo] = useState([])
    const addTodo = (text) => {
        setTodo([...todo, {text, id: Date.now()}])
    }

    const removeTodo = (id) => {
        setTodo(
            todo.filter(
                item => item.id !== id
            )
        )
    }
    return (
        <Todocontext.Provider value={{todo, addTodo, removeTodo}}>
            {children}
        </Todocontext.Provider>
    )
}

export {Todocontext, TodoProvider}