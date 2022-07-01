import React, { useEffect, useState } from 'react';
import Task from '../Componant/Task/Task';
const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-taiga-19091.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h2 className='text test text-3xl font-bold text-center'>Hear is some daily task of Web Developer : {tasks.length}</h2>
            {tasks.map(task => <Task
                key={task.id}
                task={task}
            ></Task>)}
        </div>
    );
};
export default Tasks;