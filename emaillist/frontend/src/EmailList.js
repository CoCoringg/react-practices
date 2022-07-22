import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function EmailList({emailList}) {
    return (
        <ul className={styles.Emaillist}>
            {
                emailList.map((e) => (
                    <Email
                        key={e.no}
                        firstName={e.firstName}
                        lastName={e.lastName}
                        email={e.email} />
                ))
            }
        </ul>
    );
}

export default EmailList;