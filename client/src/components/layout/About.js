import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
	return (
		<Fragment>
			<Navbar />
			<section id="about" style={{ margin: '5rem 2rem' }}>
				<div class="container">
					<div class="row about-container">
						<div class="col-lg-7 content order-lg-1 order-2">
							<h2 class="title">Few Words About Us</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>

							<div class="icon-box">
								<div class="icon">
									<i class="fa fa-shopping-bag" />
								</div>
								<h4 class="title">
									<a href="">Eiusmod Tempor</a>
								</h4>
								<p class="description">
									Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
									soluta nobis est eligendi
								</p>
							</div>

							<div class="icon-box" data-aos="fade-up" data-aos-delay="200">
								<div class="icon">
									<i class="fa fa-photo" />
								</div>
								<h4 class="title">
									<a href="">Magni Dolores</a>
								</h4>
								<p class="description">
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum
								</p>
							</div>

							<div class="icon-box" data-aos="fade-up" data-aos-delay="300">
								<div class="icon">
									<i class="fa fa-bar-chart" />
								</div>
								<h4 class="title">
									<a href="">Dolor Sitema</a>
								</h4>
								<p class="description">
									Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat tarad limino ata
								</p>
							</div>
						</div>
						<div class="col-lg-5 content order-lg-1 order-2">
							<div className="card bg-light mb-3">
								<div className="card-header bg-success text-white text-uppercase">
									<i className="fa fa-home" /> Contact Details
								</div>
								<div className="card-body">
									<h4>
										<strong>Shushk Engineering</strong>
									</h4>{' '}
									<br />
									<p> LLP, 881/17 </p>
									<p>Faridabad, Haryana</p>
									<p>India</p>
									<p>121002</p>
									<p>
										<strong>Contact Email:</strong>{' '}
										<a href="mailto:a.sharma@shushk.in"> a.sharma@shushk.in</a>
									</p>
									<p>
										<strong>Contact Number:</strong>{' '}
										<a href="https://wa.me/8447727837">+8447727837</a>
									</p>
								</div>
							</div>
						</div>

						<div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100" />
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
};

export default About;
