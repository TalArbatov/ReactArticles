import React from "react";
import styled from 'styled-components';
import NavbarButton from './NavbarButton'

const Container = styled.div`
    background-color: #5d5275;
    height: 50px;
    width: 100%;
    ul {
        display: inline-block;
    }
    li, a{
        display: inline-block;
        color:white;
        margin-left: 6px;
        text-decoration:none;
    }
`;


const Navbar = props => {
  return (
    <Container>
      <ul>
        <NavbarButton to='/createArticle' text='New Article'/>
        <NavbarButton to='/viewArticles' text='View Articles'/>

      </ul>
    </Container>
  );
};

export default Navbar;


