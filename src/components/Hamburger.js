import React from 'react';
import hamburger from '../assets/icons8-hamburger-menu-30.png';
export const Hamburger = ({ handleToggle }) => {
	return (
		<div className='ham' onClick={handleToggle}>
			<img src={hamburger} alt='hamburger' />
		</div>
	);
};
