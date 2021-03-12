import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  boardType,
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
          boardType={boardType}
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
    boardType: board,
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

OnlineGamePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  boardType: PropTypes.string.isRequired,
  piece: PropTypes.string.isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
    points: PropTypes.number,
  }),
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      whiteSan: PropTypes.string,
      blackSan: PropTypes.string,
      index: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
  statusText: PropTypes.string.isRequired,
  updateMoves: PropTypes.func.isRequired,
  updateStatusText: PropTypes.func.isRequired,
  loginUserWithSocials: PropTypes.func.isRequired,
  loginUserWithForm: PropTypes.func.isRequired,
  updateLocalStorage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGamePage);
