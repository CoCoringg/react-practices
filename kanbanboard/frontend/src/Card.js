import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

function Card({title, description, tasklist}) {
    // console.log(tasklist);
    const [taskClick, setTaskClick] = useState(true);

    return (
        <div className={styles.Card}>
          <div className={taskClick ? styles.Card__Title : [styles.Card__Title, styles.Card__Title__open].join(" ")}
            onClick={() => setTaskClick(taskClick => !taskClick)}>{title}</div>
          <div className={styles.Card__Details}>
            {description}
            {
                taskClick===true?null:<TaskList tasklist={tasklist} /> 
            }
          </div>
        </div>
    );
}

export default Card;