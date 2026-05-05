import "./Jokes.css";
import { useState, useEffect } from "react";

const URL = "https://official-joke-api.appspot.com/random_joke";

export default function Jokes() {
  const [joke, setJoke] = useState({});

  const getJokes = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    async function getFirstJoke() {
         const response = await fetch(URL);
    const jsonResponse = await response.json();
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
    }
    getFirstJoke();
  }, []);

  return (
    <div className="jokes">
      <h1>Joker</h1>

      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>

      <button onClick={getJokes}>
        <span className="button_top">Get a Joke</span>
      </button>
    </div>
  );
}
