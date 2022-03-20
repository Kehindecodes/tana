import React from 'react';

const Button = ({ classes, value }) => {
	return (
		<>
			<button className={classes === 'orange' ? 'btn_orange' : 'btn'}>
				{value}
			</button>
		</>
	);
};

export default Button;
