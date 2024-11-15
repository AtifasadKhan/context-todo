import {useContext, useState} from "react";
import {Todocontext} from "./todocontext.jsx";

const Todoform = () => {
    const {addTodo} = useContext(Todocontext)
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text)
        setText('')

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={text} type="text" onChange={(e) => {
                    setText(e.target.value)
                }}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Todoform