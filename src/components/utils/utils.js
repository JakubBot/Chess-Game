/* eslint-disable import/prefer-default-export */
export const convertTime = (_seconds) => {
  const minutes = Math.floor(_seconds / 60);

  const seconds = _seconds - minutes * 60;
  if (seconds > 9) return `${minutes}: ${seconds}`;
  return `${minutes}: 0${seconds}`;
};

export const generateID = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 28; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

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
  draw,
  check,
  checkmate,
  turn,
  repetition,
  insufficientMaterial,
  stalemate
) {
  const Move = turn === 'b' ? 'Black' : 'White';
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
    return `${Move} in checkmate, gameover`;
  }
  if (check) {
    return `${Move} in check`;
  }
  return '';
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
export function allowMove(turn, piece) {
  return (
    !(turn === 'w' && piece.search(/^b/) !== -1) ||
    (turn === 'b' && piece.search(/^w/) !== -1)
  );
}

export const domain = () => {
  if (window.location.port) {
    return window.location.origin;
  }
  return window.location;
};

// const [timer, setTimer] = useState(12);
// useEffect(() => {
//   const interval = setInterval(() => {
//     if (timer > 0) setTimer((timer) => timer - 1);
//     else clearInterval(interval);
//   }, 1000);

//   return () => clearInterval(interval);
// }, [timer]);
