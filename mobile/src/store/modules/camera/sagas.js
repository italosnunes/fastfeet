import { takeLatest, all, put } from 'redux-saga/effects';
import { saveImage } from './actions';

export function show() {}

export function close() {}

export function save({ payload }) {
  const image = payload;
  put(saveImage(image));
}

export default all([
  takeLatest('@camera/ON', show),
  takeLatest('@camera/OFF', close),
  takeLatest('@camera/SAVA_IMAGE', save),
]);
