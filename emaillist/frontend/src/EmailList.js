import React from 'react';
import styles from './assets/css/styles.css';

function EmailList({emailList}) {
    return (
        <ul className={styles.Emaillist}>
            {
                emailList.map((e) => (
                    <li key={e.no}>
                        {e.firstName+e.lastName}
                        <br/>
                        {e.email}
                    </li>
                ))
            }
        </ul>
    );
}

export default EmailList;