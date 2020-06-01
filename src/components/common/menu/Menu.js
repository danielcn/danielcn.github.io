import React from 'react'
import {
  Link
} from "react-router-dom";

const Menu = () => {
  return(
    <nav>
      <h1 className="logo">AjaniTech</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Article</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/portifolio">Portifolio</Link></li>
        <li><a href="https://www.linkedin.com/in/daniel-nascimento/" target="_blank" rel="noopener noreferrer">Curriculum</a></li>
      </ul>
    </nav>
  )
}

export default Menu;
