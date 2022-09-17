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
    "⛽": "Fuel Pump",
    "🚁": "Helicopter",
    "🥦": "Broccoli",
    "🍕": "Pizza",
    "📠": "Fax Machine",
    "⚙️": "Gear",
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
      setEmoji("❌ Emoji entered not found ❌");
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

      <div className="output-container"> Emoji Meaning </div>
      <div className="output-meaning">{emoji}</div>

      <h2 className="info">
        Click <span style={{ color: "red" }}>Emoji`s ⬇️ </span>below to know
        meaning
      </h2>
      <div className="emoji-container">
        {emojiArray.map((emoji) => {
          return (
            <span
              className="emoji-icon"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
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
