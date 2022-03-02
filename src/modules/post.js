const setData = async (name, score) => {
  const data = {
    user: name, score,
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jplay/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default setData;