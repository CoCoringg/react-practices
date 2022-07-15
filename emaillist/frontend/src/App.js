import React from 'react';
import emails from './assets/json/data.json';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import styles from './assets/css/styles.css';

function App() {
    // console.log(emails);
    
    return (
        <div id={styles.App}>
            <SearchBar />
            <EmailList emailList={emails} />
        </div>
    );
}

export default App;