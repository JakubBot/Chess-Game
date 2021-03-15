import gameStartMP3 from '../../../assets/music/game.mp3';
import gameStartWEBM from '../../../assets/music/game.webm';
import gameStartOGG from '../../../assets/music/game.ogg';
import gameStartWAV from '../../../assets/music/game.wav';

import checkStartMP3 from '../../../assets/music/check.mp3';
import checkStartWEBM from '../../../assets/music/check.webm';
import checkStartOGG from '../../../assets/music/check.ogg';
import checkStartWAV from '../../../assets/music/check.wav';

const gameMusics = [
  {
    src: gameStartWEBM,
    id: 1,
    type: 'audio/webm',
  },
  {
    src: gameStartOGG,
    id: 2,
    type: 'ogg',
  },
  {
    src: gameStartMP3,
    id: 3,
    type: 'mpeg',
  },
  {
    src: gameStartWAV,
    id: 4,
    type: 'wav',
  },
];
const checkMusics = [
  {
    src: checkStartWEBM,
    id: 1,
    type: 'audio/webm',
  },
  {
    src: checkStartOGG,
    id: 2,
    type: 'ogg',
  },
  {
    src: checkStartMP3,
    id: 3,
    type: 'mpeg',
  },
  {
    src: checkStartWAV,
    id: 4,
    type: 'wav',
  },
];

export { gameMusics, checkMusics };
