import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import tournaments from './tournaments-reducer';

export default combineReducers({
    routing,
    tournaments,
});
