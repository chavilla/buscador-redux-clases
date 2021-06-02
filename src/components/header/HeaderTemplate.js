import React from 'react';
import './headerStyles.css';

const HeaderTemplate = ({ state }) => {

	const { user } = state;

	return (
		<>
			<div className='header'>
				<p className='header__welcome'>Bienvenido { user } </p>
			</div>
		</>
	)
}

export default HeaderTemplate;
