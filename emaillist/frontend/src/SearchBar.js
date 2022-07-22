import React from 'react';
import styles from './assets/scss/SearchBar.scss';

function SearchBar({callback}) {
    return (
        <div className={styles.Searchbar}>
            찾기: <input 
            type='text' 
            placeholder='search'
            onChange={e => {callback(e.target.value);}}/>
        </div>
    );
}

export default SearchBar;