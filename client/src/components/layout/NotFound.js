import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
	return (
		<Fragment>
			<Navbar />
			<div style={{ marginTop: '5rem', textAlign: 'center' }}>
				<h1 className="x-large text-primary">
					Error 404 :( <br />
					<br />
					<i className="fas fa-exclamation-triangle" />Page Not Found
					<br />
				</h1>

				<p className="large">Sorry, this page does not exist</p>
			</div>
			<Footer />
		</Fragment>
	);
};

export default NotFound;
