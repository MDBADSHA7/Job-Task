import React from 'react';
import './Task.css'
const Task = (props) => {
    const { task } = props.task;
    return (
        <div>
            <div className='task'>
                <div class="form-control">
                    <label class="cursor-pointer label">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
                    </label>
                </div>
                {task}
            </div>
        </div>
    );
};

export default Task;