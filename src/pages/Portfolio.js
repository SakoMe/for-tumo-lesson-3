import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
	return (
		<div>
			<h1>Portfolio Page</h1>
			<Link to='portfolio/1'>Portfolio Item One</Link>
			<Link to='portfolio/2'>Portfolio Item Two</Link>
		</div>
	);
}
