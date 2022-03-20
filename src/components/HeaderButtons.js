import React from 'react';
import Button from './Button';

const HeaderButtons = (props) => {
	return (
		<div className={props.classes}>
			<Button value='LOGIN' classes='' />
			<Button value='SIGNUP' classes='orange' />
		</div>
	);
};

export default HeaderButtons;
