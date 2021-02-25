import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import OnlineGame from '../OnlineGame';
import ScoreBoard from '../ScoreBoard';
import * as boardActions from '../../redux/actions/boardActions';
import * as userActions from '../../redux/actions/userActions';
import { canLogInWithSocials, canLoginWithForm } from '../utils/loginUitls';
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
  loginUserWithSocials,
  loginUserWithForm,
}) => {
  const [authUser] = useAuthState(auth);
  useEffect(() => {
    unsubscribe = canLogInWithSocials(authUser, user, loginUserWithSocials);

    canLoginWithForm(authUser, user, loginUserWithForm);

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
  loginUserWithSocials: userActions.loginUserWithSocials,
  loginUserWithForm: userActions.loginUserWithForm,
  // loginUser: userActions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGamePage);
