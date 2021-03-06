import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "ðĨĄ": "takeout box",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ð": "Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ðĪ": "Thinking Face",
  "ðŠ": "Sleepy Face"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    emoji = emojiDictionary[userInput];
    if (emoji === undefined) {
      emoji = "Not Found";
    }
    setEmoji(emoji);
  }
  function onClickHandler(item) {
    emoji = emojiDictionary[item];
    setEmoji(emoji);
  }
  return (
    <div className="App">
      <header>
        <h1>Emoji Interpreter</h1>
      </header>
      <input placeholder="Enter your emoji here" onChange={onChangeHandler} />
      <div id="emoji">{emoji}</div>
      <ul>
        {emojis.map((item) => {
          return (
            <span key={item} onClick={() => onClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
