import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState<string>("unknown entity");
  const enteredName = useRef<HTMLInputElement>(null);

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" id="playerNameInput" ref={enteredName} />
        <button onClick={() => setPlayerName(enteredName.current!.value)}>
          Set Name
        </button>
      </p>
    </section>
  );
}
