import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import delivery from './delivery/reducer';
import camera from './camera/reducer';

export default combineReducers({ auth, user, delivery, camera });
