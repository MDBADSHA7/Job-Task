import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './Task.css'
const Task = (props) => {
    const { task } = props.task;
    return (
        <div className='text text-3xl font-bold'>
            <div className='task'>
                <div class="form-control">
                    <label class="cursor-pointer label">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
                    </label>
                </div>
                {task}
                <button>
                    <TrashIcon className='trash-Icon'></TrashIcon>
                </button>
            </div>
        </div>
    );
};

export default Task;