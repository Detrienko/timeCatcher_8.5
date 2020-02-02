import { combineReducers } from 'redux';
import businessListReducer from './businessList';



const rootReducer = combineReducers({
	businessList: businessListReducer,
});

export default rootReducer;