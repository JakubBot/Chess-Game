import types from '../actions/actionTypes';
import initialState from './initialState';

export default function boardReducer(state = initialState.boardInfo, action) {
  switch (action.type) {
    case types.CHANGE_BOARD:
      return { ...state, board: action.board };
    case types.CHANGE_PIECE:
      return { ...state, piece: action.piece };
    case types.CHANGE_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
}
