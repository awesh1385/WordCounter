import { useRef, useState } from "react";

export const Counter = () => {
  const [character, setCharectar] = useState(0);
  const [word, setWord] = useState(0);
  const textRef = useRef();
  function handleChange() {
    const value = textRef.current.value;
    setCharectar(value.length);
    value.length ? setWord(value.trim().split(" ").length) : setWord(0);
  }
  function handleClick(e) {
    e.preventDefault();
    textRef.current.value = " ";
    setCharectar(0);
    setWord(0);
  }
  return (
    <section>
      <div className="main">
        <div className="text-area">
          <textarea
            onChange={handleChange}
            name="inputarea"
            id="inputarea"
            cols="100"
            rows="20"
            placeholder="Type or Paste Your Text"
            ref={textRef}
          ></textarea>
        </div>
        <button onClick={handleClick}>Clear All</button>
        <div className="display">
          <span>Charectar Count {character}</span>
          <span>Word Count {word}</span>
        </div>
      </div>
    </section>
  );
};
