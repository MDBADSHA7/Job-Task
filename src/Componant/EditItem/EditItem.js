import React, { useState } from 'react';
import './EditItem.css'
const EditItem = () => {
    const [task, setTask] = useState([]);
    const handleAddRestoke = event => {
        event.preventDefault();
        const task = event.target.task.value;
        console.log(task)
        const user = { task };
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const newTask = [...task, data];
                setTask(newTask);
                console.log(data);
                alert('Daily task added successfully')
                event.target.reset();
            })
    }
    return (
        <div >
            <h1 className='mt-2 text-success font font-bold text text-3xl'>Please Add Daily Task</h1>
            <div className='ToDo'>
                <form onSubmit={handleAddRestoke}>
                    <input type="text" name="task" className="input input-bordered" placeholder='Write Daily Task' required />
                    <br />
                    <input type="submit" className="input input-bordered bg bg-red-300" value="Add Hear" />
                </form>
            </div>
        </div>
    );
};

export default EditItem;