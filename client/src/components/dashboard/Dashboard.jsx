import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

//Actions
import { getNCAALiveScores } from '../../actions/ncaa';

const Dashboard = ({
	auth: { user },
	ncaa: { scores, loaded },
	getNCAALiveScores
}) => {
	useEffect(() => {
		getNCAALiveScores('all');
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			getNCAALiveScores('all');
		}, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Fragment>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'> Welcome {user && user.name}</i>
			</p>
			<div className='my-2'>
				<button
					onClick={() => getNCAALiveScores('fbs')}
					className='btn btn-primary'>
					Get NCAA FBS Live Scores
				</button>
				<button
					onClick={() => getNCAALiveScores('div3')}
					className='btn btn-primary'>
					Get NCAA Division 3 Live Scores
				</button>
				<button
					onClick={() => getNCAALiveScores('fcs')}
					className='btn btn-primary'>
					Get NCAA FCS Live Scores
				</button>
				<button
					onClick={() => getNCAALiveScores('all')}
					className='btn btn-primary'>
					Get NCAA Live Scores
				</button>
			</div>
			{/* {profile != null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2"><button onClick={() => deleteAccount()} className="btn btn-danger">
            <i className="fas fa-user-minus">Delete My Account</i></button></div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )} */}
		</Fragment>
	);
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
	ncaa: PropTypes.object.isRequired,
	getNCAALiveScores: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	ncaa: state.ncaa
});

export default connect(mapStateToProps, { getNCAALiveScores })(Dashboard);
