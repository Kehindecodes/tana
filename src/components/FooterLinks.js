import React from 'react';
import { BsDash } from 'react-icons/bs';
const FooterLinks = () => {
	return (
		<div>
			<ul>
				<li>
					<BsDash />
					<a href='/'>Home</a>
				</li>
				<li>
					<BsDash />
					<a href='/about'>About</a>
				</li>
				<li>
					<BsDash />
					<a href='/service'>Service</a>
				</li>
				<li>
					<BsDash />
					<a href='/contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterLinks;
