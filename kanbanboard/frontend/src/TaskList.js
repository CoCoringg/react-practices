import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

function TaskList({tasklist}) {
    return (
        <div className={styles.TaskList}>
            <ul>
                {
                    tasklist.map(task =>
                        <Task 
                            key={task.no}
                            name={task.name}
                            done={task.done}/>)
                }
            </ul>
            <input
                type='text'
                className={styles.TaskList__add_task}
                placeholder='태스크 추가'/>
        </div>
        
    );
}

export default TaskList;