import React from 'react';
import Card from './Card';
import styles from './assets/css/CardList.css';

function CardList({title, cards}) {
    console.log(title,":",cards);
    
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            <div className={styles.TaskList}>
              <ul>
                {
                    cards.map((card) => (
                        <Card
                            key={card.no}
                            title={card.title}
                            description={card.description}
                            status = {card.status}
                            tasklist={card.tasks} />
                    ))
                }
              </ul>
            </div>
        </div>
    );
}

export default CardList;