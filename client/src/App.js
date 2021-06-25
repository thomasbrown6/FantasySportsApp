import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/App.css';
import './assets/css/App.scss';

import Home from './pages/home';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Subheader from './components/subheader';
import Scores from './components/scores';
import News from './pages/news';
import Podcast from './pages/podcast';
import Profile from './pages/profile';
import Fantasy from './pages/fantasy';
import NFL from './pages/nfl';
import NCAAF from './pages/ncaaf';
import Stats from './pages/stats';
import Articles from './pages/articles';
import Statstable from './pages/statstable';

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
								<Route
									exact
									path='/fantasy'
									component={Fantasy}
								/>
								<Route exact path='/nfl' component={NFL} />
								<Route exact path='/ncaaf' component={NCAAF} />
								<Route exact path='/stats' component={Stats} />
								<Route
									exact
									path='/articles'
									component={Articles}
								/>
								<Route
									exact
									path='/statstable'
									component={Statstable}
								/>

								<Route exact path='/news' component={News} />
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
