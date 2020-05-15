import React from 'react';
import Menu from '../common/menu/Menu';

function Home() {
  return (
    <div className="App">		
			<header className="showcase">
				<div className="container">
					<Menu />
					<div className="showcase-content">
						<div>
							<h1>Make Your Idea Real</h1>
							<p className="my-1">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
								eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
								vitae dolore.
							</p>
							<a href="#" className="btn-primary">Learn More</a>
							<a href="#" className="btn-secondary">Sign Up</a>
						</div>
						<img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" />
					</div>
				</div>
			</header>
    </div>
  );
}

export default Home;
