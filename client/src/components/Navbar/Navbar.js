import React from "react";
import styled from "styled-components";
import NavbarButton from "./NavbarButton";
import { Navbar, NavItem } from "react-materialize";
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #5d5275;
  height: 50px;
  width: 100%;
  ul {
    display: inline-block;
  }
  li,
  a {
    display: inline-block;
    color: white;
    margin-left: 6px;
    text-decoration: none;
  }
`;

const links = [
  {
    to: '/createArticle',
    text: 'New Article'
  },
  {
    to: '/viewArticles',
    text: 'View Article'
  },
  {
    to: '/login',
    text: 'Login'
  }
]

const UpperNavbar = props => {
  return (
    <Navbar brand="Articles" right>
      {links.map((link, key) => {
        return <NavbarButton key={key} to={link.to} text={link.text}></NavbarButton>
      })}
    </Navbar>
  );
};

export default UpperNavbar;


/*
 * 
      <NavItem>
        {" "}
        <Link to={to}>{text}</Link>
      </NavItem>
 */

   // <Container>
    //   <ul>
    //     <NavbarButton to='/createArticle' text='New Article'/>
    //     <NavbarButton to='/viewArticles' text='View Articles'/>

    //   </ul>
    // </Container>