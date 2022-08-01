import React, {useState, useEffect} from 'react';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import RegisterForm from './RegisterForm'
import './assets/scss/App.scss';

function App() {
    // console.log(emails);
    const [emails, setEmails] = useState([]);

    const notifyEmailDelete = function(no) {
        console.log(no);
    }
    
    const emailAdd = async function(email) {
        try {
          const response = await fetch(`/api`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(email)
          });
    
          if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
    
          const json = await response.json();
    
          if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`);  
          }
    
          setEmails([json.data, ...emails]);
        } catch(err) {
          console.log(err);
        }
      }

    const keywordChanged = async function(keyword) {
        try {
            const response = await fetch(`/api?kw=${keyword}`, {
              method: 'get',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: null
            });
    
            if(!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
    
            if(json.result !== 'success') {
              throw new Error(`${json.result} ${json.message}`);  
            }
    
            setEmails(json.data);
          } catch(err) {
            console.log(err);
          }
      }

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('/api', {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: null
                });
        
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
        
                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }
                
                setEmails(json.data);

            } catch(err) {
                console.log(err);
            }
        }
        
        fetchData();
        
    }, []);

    return (
        <div id={'App'}>
            <RegisterForm callback={emailAdd}/>
            <SearchBar callback={keywordChanged} />
            <EmailList emailList={emails} />
        </div>
    );
}

export default App;