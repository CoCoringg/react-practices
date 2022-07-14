import React from 'react';

function Content(props) {
    // return (
    //     <p>Pure React(React API)로 컴포넌트 만들기</p>
    // );
    return React.createElement('p', null, 'JSX Tutorial - Pure React(React API)로 컴포넌트 만들기')
}

export default Content;