import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import ncaa from './ncaa';

export default combineReducers({
	alert,
	auth,
	ncaa
});
