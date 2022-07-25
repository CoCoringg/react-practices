import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

function Card({title, description, tasklist, status}) {
    // console.log(tasklist);
    const [taskClick, setTaskClick] = useState(true);
    const styleSideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      bottom: 0,
      width: 4,
      backgroundColor: status === 'ToDo'?'#bd8D31':(status === 'Doing'?'#3a7e28':'#222')
    }
    return (
        <div className={styles.Card}>
          <div style={styleSideColor} />
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