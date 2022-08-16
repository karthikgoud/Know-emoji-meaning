import { useState } from "react";
import "./App.css";

function App() {
  const emojiObject = {
    "🔭": "Telescope",
    "🧨": "Firecracker",
    "🌋": "Volcano",
    "🍱": "Bento Box",
    "🤼": "People Wrestling",
    "🥳": "Partying Face",
    "⌛": "Hourglass Done",
    "⌚": "Watch",
    "🙃": "Upside-Down Face",
    "🌡️": "Thermometer",
    "🧸": "Teddy Bear",
    "⛱️": "Umbrella on Ground",
    "💚": "Green Heart",
    "🦁": "Lion",
    "🤩": "Star-Struck",
    "🥚": "Egg",
    "🍿": "Popcorn",
    "🏊‍♂️": "Man Swimming",
    "🥶": "Cold Face",
    "🚴‍♀️": "Woman Biking",
    "🌅": "Sunrise",
    "🛸": "Flying Saucer",
    "😉": "Winking Face",
    "💣": "Bomb",
  };

  const emojiArray = Object.keys(emojiObject);

  const [emoji, setEmoji] = useState("Want to know Emoji Meaning ?");

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    const keys = Object.keys(emojiObject);
    // console.log(keys);

    if (keys.includes(userInput)) {
      const meaning = emojiObject[userInput];
      setEmoji(meaning);
    } else {
      setEmoji("Emoji entered not found");
    }
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiObject[emoji];
    setEmoji(meaning);
  }
  // -------------------
  return (
    <div className="App">
      <h1 className="Heading"> Know Emoji Meaning </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Paste emoji here to know meaning."
      />

      <div
        style={{
          className: "output-container",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          color: "white",
          background: "darkcyan",
          padding: "0.5rem 1rem",
          width: "50%",
          margin: "auto",
        }}
      >
        {emoji}
      </div>
      <h2>
        Click <span style={{ color: "red" }}>Emoji`s below...</span> ⬇️
      </h2>
      <div style={{ width: "900px", margin: "0 auto" }}>
        {emojiArray.map((emoji) => {
          return (
            <span
              className="emoji-icon"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{
                padding: "0.5rem",
                fontSize: "2rem",
                margin: "0.4rem",
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
