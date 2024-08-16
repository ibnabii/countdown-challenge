import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState<string>("");
  const enteredName = useRef<HTMLInputElement>(null);

  return (
    <section id="player">
      <h2>Welcome {playerName !== "" ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" id="playerNameInput" ref={enteredName} />
        <button
          onClick={() => {
            setPlayerName(enteredName.current!.value);
            enteredName.current!.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
