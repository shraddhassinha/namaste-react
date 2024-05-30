import React from 'react';
import { useRouteError } from 'react-router';

function ErrorComponent(props) {
    const error = useRouteError()
    console.log(error,'shra')
    return (
        <div>
            <h1>something went wrong!!</h1>
            <h2>{error.data}</h2>
        </div>
    );
}

export default ErrorComponent;