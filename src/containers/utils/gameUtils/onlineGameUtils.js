import { firestore } from '../../../firebase-config';
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

// export function Turn(playerNum, isMyTurn) {
//   if (playerNum > 0) {
//     if (isMyTurn) {
//       return 'Your Turn';
//     }
//     return "Waiting for opponent's move...";
//   }
//   return 'View Only';
// }

export const domain = () => {
  if (window.location) {
    return `${window.location.origin}${process.env.PUBLIC_URL}`;
  }
  return window.location;
};

export function setTimeLeft({ id, timeLeft }, gameEngine) {
  const chessRef = firestore.collection('games').doc(id);

  if (gameEngine.turn() === 'w') {
    chessRef.update({
      'timeLeft.whiteTime': timeLeft.whiteTime - 1,
    });
  } else {
    chessRef.update({
      'timeLeft.blackTime': timeLeft.blackTime - 1,
    });
  }
}
