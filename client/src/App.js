import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Subheader from './components/subheader';
import Scores from './components/scores';

import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<div className='App'>
						<Subheader />
						<Scores />
						<Header />
						<Route exact path='/' component={Home} />
						<section className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/register'
									component={Register}
								/>
								<Route exact path='/login' component={Login} />
							</Switch>
						</section>
						<Footer />
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
