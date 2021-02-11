import actionTypes from './actionTypes';

export function changeBoard(board) {
  return { type: actionTypes.CHANGE_BOARD, board };
}
export function changePiece(piece) {
  return { type: actionTypes.CHANGE_PIECE, piece };
}
export function changeMode(mode) {
  return { type: actionTypes.CHANGE_MODE, mode };
}

export function updateMoves(move) {
  return { type: actionTypes.UPDATE_MOVES, move };
}

// setState({
//   ...state,
//   board: target.name,
// });
