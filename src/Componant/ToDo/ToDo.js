import React, { useState } from 'react';
import './ToDo.css'
import './ToDo'
const ToDo = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemAdd = (event) => {
        setInputList(event.target.value)
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("");
    };
    return (
        <div className='main-div'>
            <div className='center-div'>
                <br />
                <p>To-Do List</p>
                <br />
                <input type="text" placeholder='Add a Item' value={inputList} className="input input-bordered" onChange={itemAdd} />
                <br />
                <button onClick={listOfItems}> + </button>
                <ol>
                    {items.map((itemval) => {
                        return <ToDo text={itemval} />
                    })}
                </ol>
            </div>

        </div>
    );
};

export default ToDo;