import { useState } from "react";
import "./App.css";

function App() {
  const emojiObject = {
    "๐ญ": "Telescope",
    "๐งจ": "Firecracker",
    "๐": "Volcano",
    "๐ฑ": "Bento Box",
    "๐คผ": "People Wrestling",
    "๐ฅณ": "Partying Face",
    "โ": "Hourglass Done",
    "โ": "Watch",
    "๐": "Upside-Down Face",
    "๐ก๏ธ": "Thermometer",
    "๐งธ": "Teddy Bear",
    "โฑ๏ธ": "Umbrella on Ground",
    "๐": "Green Heart",
    "๐ฆ": "Lion",
    "๐คฉ": "Star-Struck",
    "๐ฅ": "Egg",
    "๐ฟ": "Popcorn",
    "๐โโ๏ธ": "Man Swimming",
    "๐ฅถ": "Cold Face",
    "๐ดโโ๏ธ": "Woman Biking",
    "๐": "Sunrise",
    "๐ธ": "Flying Saucer",
    "๐": "Winking Face",
    "๐ฃ": "Bomb",
  };

  const emojiArray = Object.keys(emojiObject);

  const [emoji, setEmoji] = useState("Want to know Emoji Meaning ?");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    const meaning = emojiObject[userInput];
    setEmoji(meaning);
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
          paddingTop: "1rem",
          color: "blue",
          marginBottom: "1rem",
        }}
      >
        {emoji}
      </div>
      <h2>
        Click <span style={{ color: "steelblue" }}>Emoji`s ...</span> โฌ๏ธ
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
