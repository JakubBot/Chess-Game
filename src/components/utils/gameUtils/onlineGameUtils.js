import firebase, { firestore } from '../../../firebase-config';
/* eslint-disable camelcase */
export function figurePlayer(token, { p1_token, p2_token }) {
  if (token === p1_token) {
    return 1;
  }
  if (token === p2_token) {
    return 2;
  }
  return 0;
}

export const domain = () => {
  if (window.location) {
    return `${window.location.origin}${window.location.pathname}#`;
  }
  return window.location;
};

export function setTimeLeft({ id }, gameEngine) {
  const chessRef = firestore.collection('games').doc(id);

  if (gameEngine.turn() === 'w') {
    chessRef.update({
      'timeLeft.whiteTime': firebase.firestore.FieldValue.increment(-1),
    });
  } else {
    chessRef.update({
      'timeLeft.blackTime': firebase.firestore.FieldValue.increment(-1),
    });
  }
}
