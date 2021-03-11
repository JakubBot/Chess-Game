import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import OnlineGame from '../../components/OnlineGame';
import ScoreBoard from '../../components/ScoreBoard';
import * as boardActions from '../../redux/actions/boardActions';
import * as userActions from '../../redux/actions/userActions';
import { auth } from '../../firebase-config';

const OnlineGamePage = ({
  user,
  moves,
  statusText,
  piece,
  board,
  history,
  updateMoves,
  updateStatusText,
  loginUserWithSocials,
  loginUserWithForm,
  updateLocalStorage,
}) => {
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    if (authUser !== null && user === null) {
      loginUserWithSocials(authUser);
    }
    if (authUser === null && user === null) {
      loginUserWithForm();
    }
  }, [authUser]);
  return (
    <>
      <div className="page__wrapper">
        <OnlineGame
          changeSite={history.push}
          user={user}
          piece={piece}
          boardType={board}
          updateMoves={updateMoves}
          updateStatusText={updateStatusText}
          updateLocalStorage={updateLocalStorage}
          userName={user?.userName}
          points={user?.points}
        />
        <ScoreBoard isOnline moves={moves} statusText={statusText} />
      </div>
    </>
  );
};
function mapStateToProps(state) {
  const { moves, statusText, piece, board } = state.boardInfo;
  const { user } = state;
  return {
    moves,
    statusText,
    piece,
    board,
    user,
  };
}

const mapDispatchToProps = {
  updateMoves: boardActions.updateMoves,
  updateStatusText: boardActions.updateStatusText,
  loginUserWithSocials: userActions.loginUserWithSocials,
  loginUserWithForm: userActions.loginUserWithForm,
  updateLocalStorage: userActions.updateLocalStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGamePage);
