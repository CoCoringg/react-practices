import React from 'react';
import styles from './assets/css/styles.css';

function SearchBar(props) {
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='search'/>
        </div>
    );
}

export default SearchBar;