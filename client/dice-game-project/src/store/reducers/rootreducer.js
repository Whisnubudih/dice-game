import { combineReducers } from 'redux';
import userReducer from './userReducer';
import itemReducer from './itemReducer';



const rootReducer = combineReducers({
    itemReducer,
  userReducer,

  
  
});

export default rootReducer;