import React, { Fragment } from 'react';

const Footer = () => {
	return (
		<Fragment>
			<footer class="page-footer font-small cyan darken-3 fixed-bottom" style={{ background: '#ebecf1' }}>
				<div class="container">
					<div class="row">
						<div class="col-md-12 py-5">
							<div class="flex-center">
								<a class="fb-ic" href="https://facebook.com">
									<i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="tw-ic" href="https://twitter.com">
									<i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="li-ic" href="https://linkedin.com">
									<i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="ins-ic" href="https://instagram.com">
									<i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-copyright text-center py-3">© 2020 Copyright: Shushk Engineering</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
