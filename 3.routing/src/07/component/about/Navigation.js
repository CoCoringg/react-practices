import React from 'react';
import styles from '../../assets/scss/component/about/Navigation.scss'

function Navigation(props) {
    return (
        <nav className={styles.Navigation}>
                <a href={'/about/me'}>뚱이</a>
                <span/>
                <a href={'/about/location'}>Location</a>
        </nav>
    );
}

export default Navigation;