import { useRef, useState } from "react";
import ResultModal, { type resultModalHandle } from "./ResultModal.tsx";

type timerChallengeProps = {
  title: string;
  targetTime: number;
};

export default function TimerChallenge({
  title,
  targetTime,
}: timerChallengeProps) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerStarted = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timer = useRef<number>();
  const dialog = useRef<resultModalHandle>(null);

  const interval = 10;

  if (timeRemaining <= 0) {
    dialog.current!.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - interval);
    }, interval);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current!.open();
  }

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={dialog}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerStarted ? handleStop : handleStart}>
            {isTimerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={isTimerStarted ? "active" : undefined}>
          {isTimerStarted ? "Time is runnning..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
