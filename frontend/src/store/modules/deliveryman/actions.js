export function setAvatar(avatar_id) {
  return {
    type: '@deliveryman/SET_AVATAR',
    payload: { avatar_id },
  };
}

export function delAvatar() {
  return {
    type: '@deliveryman/DEL_AVATAR',
  };
}
