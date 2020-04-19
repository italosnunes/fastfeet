import { takeLatest, put, all } from 'redux-saga/effects';
import { setAvatar } from './actions';

export function setNullAvatar() {}

export function setValueAvatar(payload) {
  console.tron.log('payload', payload);
  put(setAvatar(payload));
}

export default all([
  takeLatest('@deliveryman/SET_AVATAR', setValueAvatar),
  takeLatest('@deliveryman/DEL_AVATAR', setNullAvatar),
]);
