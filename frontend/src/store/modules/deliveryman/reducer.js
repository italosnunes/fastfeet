import produce from 'immer';

const INITIAL_STATE = {
  avatar_id: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/SET_AVATAR': {
        draft.avatar_id = action.payload.avatar_id;
        break;
      }
      case '@deliveryman/DEL_AVATAR': {
        draft.avatar_id = null;
        break;
      }
      default:
    }
  });
}
