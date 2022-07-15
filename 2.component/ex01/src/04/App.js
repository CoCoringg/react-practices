import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id='App'>
            <MyComponent
                /* props01={'문자열'} */
                props02={12}
                props03={1-1===0}
                props04={{no:1, name:'둘리'}}
                props05={['Hello', 'World', 'ReactJs']}
                props06={()=>'함수'}
            />
        </div>
    );
}

export default App;