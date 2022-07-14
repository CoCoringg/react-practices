import React, {Fragment} from 'react';
import Clock01 from './Clock01';

function Content(props) {
    return (
        <Fragment>
            <p>{'JSX Tutorial - JSX 표현식 표기법({js 표현식})'}</p>
            <Clock01 />
        </Fragment>
    );
}

export default Content;