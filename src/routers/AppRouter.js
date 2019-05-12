import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Navigation from '../components/Navigation';
import PortfolioItem from '../pages/PortfolioItem';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route path='/portfolio/:id' component={PortfolioItem} />
				<Route path='/contact' component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
