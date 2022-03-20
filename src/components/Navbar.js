import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Menu from './Menu';
import HeaderButtons from './HeaderButtons';
import './navbar.css';
import { Hamburger } from './Hamburger';
import { CancelBtn } from './CancelBtn';

const Navbar = (props) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<div className='navbar'>
			<Logo />
			<div className='wrapper'>
				<Menu newClass={`linkWrapper ${navbarOpen ? ' show' : ''}`} />
				<HeaderButtons classes={`btn_wrapper ${navbarOpen ? ' show' : ''}`} />
			</div>

			{navbarOpen === true ? (
				<CancelBtn handleToggle={handleToggle} />
			) : (
				<Hamburger handleToggle={handleToggle} />
			)}
		</div>
	);
};

Navbar.propTypes = {};

export default Navbar;
