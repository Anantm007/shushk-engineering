import React from 'react';
import Logo from '../../logo.PNG';
import { BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
	const styles = useStyles();

	return (
		<BrowserRouter>
			<nav className="navbar fixed-top navbar-expand-lg py-3 navbarbg shadow-sm bg-dark">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img
							src={Logo}
							alt="logo"
							width="210"
							height="60"
							className="d-inline-block align-middle mr-2"
						/>
					</a>
					<button
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						className="navbar-toggler"
					>
						<span className="navbar-toggler-icon">
							<i class="fas fa-bars" style={{ color: '#fff', fontSize: '28px' }} />
						</span>
					</button>
					<div id="navbarSupportedContent" className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a href="/about" className={styles.navLink}>
									About Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</BrowserRouter>
	);
};

const useStyles = makeStyles({
	navLink: {
		color: 'white',
		fontSize: '1.4em',
		margin: '.5em',
		'&:hover': {
			color: 'white'
		}
	}
});

export default Navbar;
