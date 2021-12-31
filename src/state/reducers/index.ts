import {combineReducers} from 'redux';
import {UserReducer} from '../user/reducer';
import {PetReducer} from '../pet/reducer';

const reducers = {
  user: UserReducer,
  pet: PetReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
