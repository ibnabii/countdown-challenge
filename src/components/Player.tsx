import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState<string>("unknown entity");
  const [enteredName, setEnteredName] = useState<string>("");

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input
          type="text"
          id="playerNameInput"
          onChange={(e) => setEnteredName(e.target.value)}
        />
        <button onClick={() => setPlayerName(enteredName)}>Set Name</button>
      </p>
    </section>
  );
}
