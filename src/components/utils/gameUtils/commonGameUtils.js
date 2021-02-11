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
