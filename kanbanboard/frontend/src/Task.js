import React, { useState } from 'react';
import styles from './assets/css/Task.css';

function Task({name, done}) {
    const [checked, setChecked] = useState(false);
    return (
        <li className={styles.Task}>
            <input 
                type='checkbox' 
                checked={checked} 
                onChange={() => setChecked(checked=>!checked)}/>
            {name}
            <a href='#' className='TaskList__Task__remove'></a>
        </li>
    );
}

export default Task;