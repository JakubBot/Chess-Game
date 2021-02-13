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
