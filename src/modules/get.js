import renderList from './display.js';

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jplay/scores/';
  let data = await (fetch(url));
  data = await data.json();
  renderList(data.result);
};

export default getData;