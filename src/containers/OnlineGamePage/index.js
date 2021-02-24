import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import OnlineGame from '../OnlineGame';
import ScoreBoard from '../ScoreBoard';
import * as boardActions from '../../redux/actions/boardActions';
import * as userActions from '../../redux/actions/userActions';
import LogIn from '../utils/loginUitls';
import { auth } from '../../firebase-config';

let unsubscribe;
const OnlineGamePage = ({
  user,
  moves,
  statusText,
  piece,
  board,
  updateMoves,
  updateStatusText,
  loginUser,
}) => {
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    unsubscribe = LogIn(authUser, user, loginUser);

    return () => unsubscribe && unsubscribe();
  }, [authUser]);

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
  loginUser: userActions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGamePage);
