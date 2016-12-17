import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import tournaments from './tournaments-reducer';
import user from './user-reducer';
import site from './site-reducer';

export default combineReducers({
    routing,
    site,
    tournaments,
    user,
});
