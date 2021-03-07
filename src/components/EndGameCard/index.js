import React, { useEffect } from 'react';
import GameCard from './GameCard';
import firebase, { firestore } from '../../firebase-config';
import './index.scss';

const $ = window.jQuery;

const unsubscribe = null;

const EndGameCard = ({ timeLeft, turn, playerNum = 1, user }) => {
  // 'bialy wygral a : End game with b'
  useEffect(() => {
    if (!user) return;
    const userRef = firestore.collection('users').where('uid', '==', user.uid);
    const status = winLoseStatus();

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

  function winLoseStatus() {
    // console.log(`End game with ${turn}`);
    if (playerNum === 1) {
      if (timeLeft.blackTime === 0 || turn === 'b') {
        return 'You won';
      }
      if (timeLeft.whiteTime === 0 || turn === 'w') {
        return 'You lost';
      }
    }
    if (playerNum === 2) {
      if (timeLeft.whiteTime === 0 || turn === 'w') {
        return 'You won';
      }
      if (timeLeft.blackTime === 0 || turn === 'b') {
        return 'You lost';
      }
    }
  }

  const deleteCard = () => {
    $('.endGameCard').css('display', 'none');
  };
  return (
    <>
      <GameCard
        deleteCard={deleteCard}
        status={winLoseStatus()}
        photo={user?.photo}
        points={user?.points}
      />
    </>
  );
};

export default EndGameCard;
