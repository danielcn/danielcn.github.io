import React from 'react';

function Home() {
  return (
    <div className="App">
			<div className="layout" class="container">
				<div className="header">
					<div>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Portifolio</a></li>
							<li><a href="https://www.linkedin.com/in/daniel-nascimento/" target="_blank">Curriculum</a></li>
						</ul>
					</div> 
					Header
				</div>
				<div className="main">
					<div>
						<h1>Make Your Idea Real</h1>
						<p class="my-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
							vitae dolore.
						</p>
						<a href="#" class="btn-primary">Learn More</a>
						<a href="#" class="btn-secondary">Sign Up</a>
					</div>
					<img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" /> 
					Main
				</div>
				<div className="footer">
					Footer
				</div>
			</div>
		 
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
						<div>
							<h1>Make Your Idea Real</h1>
							<p class="my-1">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
								eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
								vitae dolore.
							</p>
							<a href="#" class="btn-primary">Learn More</a>
							<a href="#" class="btn-secondary">Sign Up</a>
						</div>
						<img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" />
					</div>
				</div>
			</header>
    </div>
  );
}

export default Home;
