export function deliveryDetail(delivery) {
  return {
    type: '@delivery/DETAIL',
    payload: { delivery },
  };
}

export function deliveryExit() {
  return {
    type: '@delivery/EXIT',
  };
}
