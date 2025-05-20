async function getState(promise) {
  return new Promise((res, rej) => {
    promise
      .then(() => res('fulfilled'))
      .catch(() => res('rejected'));
    return setTimeout(() => res('pending'), 0);
  });
}
