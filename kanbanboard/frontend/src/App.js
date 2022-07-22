import React from 'react';
import cards from './assets/json/data.json';
import KanbanBoard from './KanbanBoard';
import styles from './assets/css/App.css';

function App() {
    console.log(cards);
    return (
        <div id={styles.App}>
            <KanbanBoard />
        </div>
    );
}

export default App;