import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import firebase, { firestore } from '../../firebase-config';
import { winLoseStatus } from '../utils/gameUtils/commonGameUtils';
import './index.scss';

const $ = window.jQuery;

const EndGameCard = ({ timeLeft, turn, playerNum = 1, user }) => {
  useEffect(() => {
    if (!user) return;
    const userRef = firestore.collection('users').where('uid', '==', user.uid);
    const status = winLoseStatus(playerNum, timeLeft, turn);
    userRef.get().then((snapshot) => {
      if (snapshot.size === 1) {
        const [user] = snapshot.docs;
        const { id } = user;

        if (status === 'You won') {
          firestore
            .collection('users')
            .doc(id)
            .update({
              points: firebase.firestore.FieldValue.increment(8),
            });
        } else {
          firestore
            .collection('users')
            .doc(id)
            .update({
              points: firebase.firestore.FieldValue.increment(-8),
            });
        }
      }
    });
  }, []);

  const deleteCard = () => {
    $('.endGameCard').css('display', 'none');
  };

  return (
    <>
      <GameCard
        deleteCard={deleteCard}
        status={winLoseStatus(playerNum, timeLeft, turn)}
        photo={user?.photo}
        points={user?.points}
        isSignedIn={user !== null}
      />
    </>
  );
};

EndGameCard.propTypes = {
  timeLeft: PropTypes.shape({
    whiteTime: PropTypes.number.isRequired,
    blackTime: PropTypes.number.isRequired,
    isGameActive: PropTypes.bool.isRequired,
  }),
  turn: PropTypes.string.isRequired,
  playerNum: PropTypes.number,
  user: PropTypes.shape({
    userName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
    points: PropTypes.number,
  }),
};

export default EndGameCard;
