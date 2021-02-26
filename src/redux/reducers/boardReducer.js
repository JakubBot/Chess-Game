import types from '../actions/actionTypes';
import initialState from './initialState';

export default function boardReducer(state = initialState.boardInfo, action) {
  let moves = [];
  if (action.move?.whiteSan || action.move?.blackSan) {
    if (state.moves?.length < 4) {
      if (action.move?.whiteSan !== '') {
        moves = [...state.moves, action.move];
      }
      if (action.move?.blackSan !== '') {
        moves = [...state.moves.slice(0, -1), action.move];
      }
    } else {
      moves = [...state.moves.slice(1, -1), action.move];
    }
  }
  // const moves =
  //   state.moves.length < 4
  //     ? [...state.moves, action.move]
  //     : [...state.moves.slice(1), action.move];
  switch (action.type) {
    case types.CHANGE_BOARD:
      return { ...state, board: action.board };
    case types.CHANGE_PIECE:
      return { ...state, piece: action.piece };
    case types.CHANGE_MODE:
      return { ...state, mode: action.mode };
    case types.UPDATE_MOVES:
      return { ...state, moves };
    case types.STATUS_TEXT:
      return { ...state, statusText: action.statusText };
    case types.DEFAULT_BOARD_SETTINGS:
      return { ...initialState.boardInfo };
    default:
      return state;
  }
}
