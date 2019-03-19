import React, { Component } from "react";
import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import ViewArticles from './ViewArticles/ViewArticles';
import CreateArticle from './CreateArticle/CreateArticle';

class App extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route path='/createArticle' component={CreateArticle}></Route>
                    <Route path='/viewArticles' component={ViewArticles}></Route>
                    <Route path='/createArticle' component={CreateArticle}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
