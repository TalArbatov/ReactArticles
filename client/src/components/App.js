import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import ViewArticles from "./ViewArticles/ViewArticles";
import CreateArticle from "./CreateArticle/CreateArticle";
import ViewArticle from "./ViewArticle/ViewArticle";
import Login from './Login/Login';


const App = props => {
  return (
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/createArticle" component={CreateArticle} />
          <Route path="/viewArticles" component={ViewArticles} />
          <Route path="/article/:id" component={ViewArticle} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 10px;
`;

export default App;
