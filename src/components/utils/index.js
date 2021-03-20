/* eslint-disable import/prefer-default-export */
export const convertTime = (_seconds) => {
  const minutes = Math.floor(_seconds / 60);

  const seconds = _seconds - minutes * 60;
  if (seconds > 9) return `${minutes}: ${seconds}`;
  return `${minutes}: 0${seconds}`;
};

export const generateID = (number = 28) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < number; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
