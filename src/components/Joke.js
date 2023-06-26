import { useEffect, useState } from "react";

export const Joke = () => {
  const [joke, setJoke] = useState();
  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    }
    fetchJoke();
  }, []);
  return (
    <section className="main-box">
      <div className="box"><p>{joke}</p></div>
    </section>
  );
};
