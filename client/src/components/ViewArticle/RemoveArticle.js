import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'

export default (props) => {
    return(
        <Link to='/viewArticles'>
            <Button onClick={props.removeHandler}>Remove</Button>
        </Link>
    )
}