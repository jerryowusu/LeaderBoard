const setData = (name, score) => {
  const data = {
    user: name, score,
  };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jplay/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
};

export default setData;