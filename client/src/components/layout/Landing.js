import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { makeStyles } from '@material-ui/core/styles';

const Landing = () => {
	const styles = useStyles();

	return (
		<Fragment>
			<Navbar />
			<section>
				<div className={styles.landingHeading}>
					<div className="landing-inner">
						<h1 className="x-large">Shushk Engineering</h1>
						<p className="lead">Buy products from us</p>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
};

const useStyles = makeStyles({
	landingHeading: {
		paddingTop: '5rem',
		fontSize: '1.4em',
		textAlign: 'center'
	}
});

export default Landing;
