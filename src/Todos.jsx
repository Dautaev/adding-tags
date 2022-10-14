import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


const Todos = ({ todos, setTodos }) => { 
    const removeTodos = (id) => {
        const result = todos.filter((item, index) => id !== index)
        setTodos(result)

    }

    return (
        <div className='todos'>
            {todos.map((el, index) => {
                return (
                    <span>{el.text} <AiFillCloseCircle onClick={() => removeTodos(index)} className='icon' /></span> 
                )
            })}
        </div>
    );
};

export default Todos;