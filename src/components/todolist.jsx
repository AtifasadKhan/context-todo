import {useContext} from "react";
import {Todocontext} from "./todocontext.jsx";

const Todolist = () => {
    const {todo,removeTodo} = useContext(Todocontext)
    console.log(todo)
    return (
        <ul>
            {todo.map((item)=>(
                <li key={item.id}>
                    {item.text}
                    <button onClick={()=> removeTodo(item.id)}>Remove</button>
                </li>
            ))}

</ul>
)
    ;
};


export default Todolist