import renderList from './display.js';

const getData = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jplay/scores/')
  .then((response) => response.json())
  .then((data) => renderList(data.result));

export default getData;