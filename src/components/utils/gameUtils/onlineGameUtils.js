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
export function statusText(
  turn,
  playerNum,
  isMyTurn,
  draw,
  check,
  checkmate,
  repetition,
  insufficientMaterial,
  stalemate
) {
  const move = turn === 'b' ? 'Black' : 'White';
  if (stalemate) {
    return 'draw by stalemate';
  }
  if (repetition) {
    return `draw by repetition`;
  }
  if (insufficientMaterial) {
    return 'draw by insufficient material';
  }
  if (draw) {
    return `draw position`;
  }
  if (checkmate) {
    return `${move} in checkmate, gameover`;
  }
  if (check) {
    return `${move} in check`;
  }
  if (playerNum > 0) {
    if (isMyTurn) {
      return 'Your Turn';
    }
    return "Opponent's move...";
  }
  return 'View Only';
}
export function Turn(playerNum, isMyTurn) {
  if (playerNum > 0) {
    if (isMyTurn) {
      return 'Your Turn';
    }
    return "Waiting for opponent's move...";
  }
  return 'View Only';
}

export function isMyTurn(playerNum, turn) {
  return (playerNum === 1 && turn === 'w') || (playerNum === 2 && turn === 'b');
}

export const domain = () => {
  if (window.location) {
    return `${window.location.origin}${process.env.PUBLIC_URL}`;
  }
  return window.location;
};
