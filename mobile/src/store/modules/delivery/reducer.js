import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/DETAIL': {
        draft.delivery = action.payload.delivery;
        break;
      }
      case '@delivery/EXIT': {
        draft.delivery = null;
        break;
      }

      default:
    }
  });
}
