import React from 'react';
import cards from './assets/json/data.json';
import KanbanBoard from './KanbanBoard';

function App() {
    console.log(cards);
    return (
        <div id={'App'}>
            <KanbanBoard />
        </div>
    );
}

export default App;