const $ = window.jQuery;

export function removeDotSquares() {
  $('#board .square-55d63').removeClass('square');
}

export function dotSquare(square) {
  const $square = $(`#board .square-${square}`);

  $square.addClass('square');
}

export function onMouseoutSquare() {
  removeDotSquares();
}

export function allowMove(turn, piece) {
  return (
    !(turn === 'w' && piece.search(/^b/) !== -1) ||
    (turn === 'b' && piece.search(/^w/) !== -1)
  );
}

export function makeDots(game, square) {
  const moves = game.moves({
    square,
    verbose: true,
  });

  if (moves.length === 0) return;

  for (let i = 0; i < moves.length; i += 1) {
    dotSquare(moves[i].to);
  }
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
    return 'Draw by stalemate';
  }
  if (repetition) {
    return `Draw by repetition`;
  }
  if (insufficientMaterial) {
    return 'Draw by insufficient material';
  }
  if (draw) {
    return `Draw position`;
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
    return "Opponent's move";
  }
  return 'View Only';
}

export function isMyTurn(playerNum, turn) {
  return (playerNum === 1 && turn === 'w') || (playerNum === 2 && turn === 'b');
}

export function winLoseStatus(playerNum, timeLeft, turn) {
  if (playerNum === 1) {
    if (timeLeft.blackTime === 0 || turn === 'b') {
      return 'You won';
    }
    if (timeLeft.whiteTime === 0 || turn === 'w') {
      return 'You lost';
    }
  }
  if (playerNum === 2) {
    if (timeLeft.whiteTime === 0 || turn === 'w') {
      return 'You won';
    }
    if (timeLeft.blackTime === 0 || turn === 'b') {
      return 'You lost';
    }
  }
}
