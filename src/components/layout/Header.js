import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style = {headerStyle}>
            <Link style = {linkStyle} to="/">Home</Link> | <Link  style = {linkStyle} to="/about">About</Link>
            <h1>TodoList</h1>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header
