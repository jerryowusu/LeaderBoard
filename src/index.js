import './style.css';
import setData from './modules/post.js';
import get from './modules/get.js';
import gameData from './modules/game.js';

window.onload = async () => {
  get();
};

const sendScore = document.querySelector('.submit-btn');
const refresh = document.querySelector('.refresh-btn');

sendScore.onclick = (e) => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  if (name.value === '' || score.value === '') {
    e.preventDefault();
  } else {
    setData(name.value, score.value);
    name.value = '';
    score.value = '';
    get();
  }
};

refresh.onclick = () => {
  get();
};

gameData();