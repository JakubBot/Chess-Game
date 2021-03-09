import React, { useEffect } from 'react';
import GameCard from './GameCard';
import firebase, { firestore } from '../../firebase-config';
import { winLoseStatus } from '../utils/gameUtils/commonGameUtils';
import './index.scss';

const $ = window.jQuery;

const unsubscribe = null;

const EndGameCard = ({ timeLeft, turn, playerNum = 1, user }) => {
  // 'bialy wygral a : End game with b'
  // console.log(user);
  // console.log(turn);
  // console.log(timeLeft);
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

    return () => unsubscribe && unsubscribe();
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

export default EndGameCard;
