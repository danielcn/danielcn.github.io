import React from 'react'

const Portifolio = () => {
  return(
    <header class="showcase">
      <div class="container">
        <nav>
          <h1 class="logo">AjaniTech</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portifolio</a></li>
            <li><a href="https://www.linkedin.com/in/daniel-nascimento/" target="_blank">Curriculum</a></li>
          </ul>
        </nav>

        <div class="showcase-content">
          <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt="portifolio" />
          <img src="static/images/geossit.png" alt="geossit" />
          <img src="static/images/curumin.png" alt="curumim logistica" />
        </div>
      </div>
    </header>
  )
}

export default Portifolio;