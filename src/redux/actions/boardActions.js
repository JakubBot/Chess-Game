import types from './actionTypes';

export function changeBoard(board) {
  return { type: types.CHANGE_BOARD, board };
}
export function changePiece(piece) {
  return { type: types.CHANGE_PIECE, piece };
}
export function changeMode(mode) {
  return { type: types.CHANGE_MODE, mode };
}

export function updateMoves(move) {
  return { type: types.UPDATE_MOVES, move };
}
export function updateStatusText(statusText) {
  return { type: types.STATUS_TEXT, statusText };
}
export function defaultBoardConfig() {
  return { type: types.DEFAULT_BOARD_CONFIG };
}

// setState({
//   ...state,
//   board: target.name,
// });
