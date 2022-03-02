const renderList = (scoreData) => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  scoreData = scoreData.sort((x, y) => y.score - x.score);
  scoreData.map((data) => {
    const score = document.createElement('li');
    score.classList.add('score');
    scores.appendChild(score);

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = `${data.user}: `;
    score.appendChild(name);

    const number = document.createElement('span');
    number.textContent = `${data.score}`;
    score.appendChild(number);
    return data;
  });
};
export default renderList;