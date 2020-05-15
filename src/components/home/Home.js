import React from 'react';
import Menu from '../common/menu/Menu';

function Home() {
  return (
    <div className="App">		
			<header class="showcase">
				<div class="container">
					<Menu />
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
