export function cameraOff() {
  return {
    type: '@camera/OFF',
  };
}

export function cameraOn() {
  return {
    type: '@camera/ON',
  };
}

export function saveImage(image) {
  return {
    type: '@camera/SAVE_IMAGE',
    payload: { image },
  };
}
