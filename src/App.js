import "./styles.css";
import { useState } from "react";

export default function App() {
  let dummyList = ["apple", "banana", "dog", "elephant"];

  const [change, setChange] = useState("");

  const handleChangle = (e) => {
    setChange(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search here..."
        onChange={handleChangle}
      />
      <br />
      {change} <br />
      <div>
        {dummyList
          .filter((dummy) => {
            const searchTerm = change.toLowerCase();
            const newName = dummy.toLowerCase();
            return searchTerm && newName.startsWith(searchTerm);
          })
          .map((dummy) => (
            <h3>{dummy}</h3>
          ))}
      </div>
    </div>
  );
}
