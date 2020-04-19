import produce from 'immer';

const INITIAL_STATE = {
  showCamera: false,
  image: '',
};

export default function camera(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@camera/ON': {
        draft.showCamera = true;
        break;
      }
      case '@camera/OFF': {
        draft.showCamera = false;
        break;
      }
      case '@camera/SAVE_IMAGE': {
        draft.image = action.payload.image;
        break;
      }

      default:
    }
  });
}
