import React, { Fragment } from 'react';

const Footer = () => {
	return (
		<Fragment>
			<footer
				className="page-footer font-small cyan darken-3 "
				style={{ background: '#ebecf1', padding: '0rem', maxHeight: '10rem' }}
			>
				<div className="container">
					<div className="row">
						<div className="col-md-12 py-5">
							<div className="flex-center" style={{ marginBottom: '-5rem' }}>
								<a className="fb-ic" href="https://facebook.com">
									<i className="fab fa-facebook-f fa-sm white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="tw-ic" href="https://twitter.com">
									<i className="fab fa-twitter fa-sm white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="li-ic" href="https://linkedin.com">
									<i className="fab fa-linkedin-in fa-sm white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="ins-ic" href="https://instagram.com">
									<i className="fab fa-instagram fa-sm white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3">© 2020 Copyright: Shushk Engineering</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
