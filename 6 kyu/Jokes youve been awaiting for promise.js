async function sayJoke(apiUrl, jokeId) {
  const data = await fetch(apiUrl);
  const {jokes} = await data.json();
  if(!jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`)
  };
  const joke = jokes.find(j => j.id === jokeId);
  if(!joke) {
    throw new Error(`No jokes found id: ${jokeId}`)
  };
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine
  };
}

/*
  Not the best readable code
*/
async function _sayJoke(apiUrl, jokeId) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((data) => data.json())
      .then(({jokes}) => {
        if(!jokes) {
          reject(new Error(`No jokes at url: ${apiUrl}`))
        };
        const joke = jokes.find(j => j.id === jokeId);
        if(!joke) {
          reject(new Error(`No jokes found id: ${jokeId}`))
        };
        resolve({
          saySetup: () => joke.setup,
          sayPunchLine: () => joke.punchLine
        })
      })
  })
}
