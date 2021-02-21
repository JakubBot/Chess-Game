/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export function getPieceValue(piece, i, j) {
  const pawnEvalWhite = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
    [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
    [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
    [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
    [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
    [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  ];
  const knightEvalWhite = [
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
    [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
    [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
    [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
    [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
    [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
    [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
  ];
  const bishopEvalWhite = [
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
    [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
    [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
    [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
    [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
    [-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  ];
  const rookEvalWhite = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
    [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
    [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
    [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
    [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
    [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
    [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0],
  ];
  const queenEvalWhite = [
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
    [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
    [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
    [0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
    [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
    [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
  ];
  const kingEvalWhite = [
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
    [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0],
  ];
  const pieceToTables = {
    p: pawnEvalWhite,
    n: knightEvalWhite,
    b: bishopEvalWhite,
    r: rookEvalWhite,
    q: queenEvalWhite,
    k: kingEvalWhite,
  };
  const pieceValues = {
    p: 10,
    n: 30,
    b: 35,
    r: 50,
    q: 90,
    k: 900,
  };
  if (piece === null) {
    return 0;
  }
  const tableFromType = pieceToTables[piece.type];
  let evaluation = pieceValues[piece.type]; // getting pieceValue
  // adding the evaluation tables
  if (piece.color === 'w') {
    evaluation += tableFromType[i][j];
  } else {
    evaluation += tableFromType[7 - i][j];
  }
  return piece.color === 'w' ? evaluation : -evaluation;
}

export function minimaxRoot(game, depth, isMaxPlayer) {
  const moves = game.moves();
  let bestMove;
  const possibilities = moves.length;
  let bestScore = -Infinity;
  for (let k = 0; k < possibilities; k++) {
    const newMove = moves[k];
    game.move(newMove);
    const score = minimax(game, depth - 1, !isMaxPlayer, -Infinity, Infinity);
    game.undo();
    if (score >= bestScore) {
      bestScore = score;
      bestMove = newMove;
    }
  }
  return bestMove;
}

function minimax(game, depth, isMaxPlayer, alpha, beta) {
  const moves = game.moves();
  const possibilities = moves.length;
  if (depth === 0) {
    return -evaluateBoard(game.board());
  }
  if (isMaxPlayer) {
    let bestScore = -Infinity;
    for (let j = 0; j < possibilities; j++) {
      game.move(moves[j]);
      bestScore = Math.max(
        bestScore,
        minimax(game, depth - 1, !isMaxPlayer, alpha, beta)
      );
      game.undo();
      alpha = Math.max(alpha, bestScore);
      if (alpha >= beta) {
        return bestScore;
      }
    }
    return bestScore;
  }
  let bestScore = Infinity;
  for (let i = 0; i < possibilities; i++) {
    game.move(moves[i]);
    bestScore = Math.min(
      bestScore,
      minimax(game, depth - 1, !isMaxPlayer, alpha, beta)
    );
    game.undo();
    beta = Math.min(beta, bestScore);
    if (alpha >= beta) {
      return bestScore;
    }
  }
  return bestScore;
}
export function evaluateBoard(board) {
  let boardEval = 0;
  // const board = game.board();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      boardEval += getPieceValue(board[i][j], i, j);
    }
  }
  return boardEval;
}
