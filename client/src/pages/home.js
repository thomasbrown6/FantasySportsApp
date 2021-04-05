import React from 'react';
import Schedules from '../components/schedules';

class Home extends React.Component {
	render() {
		return (
			<div id='home'>
				<Schedules />
				<h1>This is where your content goes</h1>
				<p>Insert content into this section here</p>
			</div>
		);
	}
}

export default Home;
