import { takeLatest, put, all } from 'redux-saga/effects';
import { deliveryDetail } from './actions';

export function details({ payload }) {
  const delivery = payload;
  put(deliveryDetail(delivery));
}

export function detailsExit() {}

export default all([
  takeLatest('@delivery/DETAIL', details),
  takeLatest('@delivery/EXIT', detailsExit),
]);
