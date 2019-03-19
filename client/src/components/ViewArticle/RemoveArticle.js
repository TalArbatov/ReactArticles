import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
    return(
        <Link to='/viewArticles'>
            <button onClick={props.removeHandler}>Remove</button>
        </Link>
    )
}