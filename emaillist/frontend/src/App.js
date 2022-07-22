import React, {useState} from 'react';
import data from './assets/json/data.json';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import RegisterForm from './RegisterForm'
import './assets/scss/App.scss';

function App() {
    // console.log(emails);
    const [emails, setEmails] = useState(data);

    const notifyEmailDelete = function(no) {
        console.log(no);
    }
    
    const notifyEmailAdd = function(email) {
        console.log(email);
    }
    const notifyKeywordChanged = function(keyword) {
        const result = data.filter(e => e.firstName.indexOf(keyword) !== -1 || e.lastName.indexOf(keyword) !== -1 || e.email.indexOf(keyword) !== -1);
        console.log(result);
        setEmails(result);
    }

    return (
        <div id={'App'}>
            <RegisterForm />
            <SearchBar callback={notifyKeywordChanged} />
            <EmailList emailList={emails} />
        </div>
    );
}

export default App;