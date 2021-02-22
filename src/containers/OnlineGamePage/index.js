import React from 'react';
import { connect } from 'react-redux';
import OnlineGame from '../OnlineGame';
import ScoreBoard from '../ScoreBoard';
import * as boardActions from '../../redux/actions/boardActions';

const OnlineGamePage = ({
  moves,
  statusText,
  piece,
  board,
  updateMoves,
  updateStatusText,
  user,
}) => {
  return (
    <>
      <div className="page__wrapper">
        <OnlineGame
          user={user}
          piece={piece}
          boardType={board}
          updateMoves={updateMoves}
          updateStatusText={updateStatusText}
        />
        <ScoreBoard isOnline moves={moves} statusText={statusText} />
      </div>
    </>
  );
};
function mapStateToProps(state) {
  const { moves, statusText, piece, board } = state.boardInfo;
  return {
    moves,
    statusText,
    piece,
    board,
    user: state.user ?? null,
  };
}

const mapDispatchToProps = {
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGamePage);
