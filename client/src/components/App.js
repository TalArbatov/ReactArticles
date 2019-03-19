import React from "react";
import styled from 'styled-components'
import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import ViewArticles from './ViewArticles/ViewArticles';
import CreateArticle from './CreateArticle/CreateArticle';
import ViewArticle from './ViewArticle/ViewArticle';

const App = props => {
    return (
        <div>
            <Navbar />
            <Container>
                <Switch>
                    <Route path='/createArticle' component={CreateArticle}></Route>
                    <Route path='/viewArticles' component={ViewArticles}></Route>
                    <Route path='/article/:id' component={ViewArticle}></Route>
                </Switch>
            </Container>
        </div>
    )
}

const Container = styled.div`
    padding:10px;
`;

export default App;
