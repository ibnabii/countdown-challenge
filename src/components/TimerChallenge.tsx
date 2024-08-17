import { useRef, useState } from "react";
import ResultModal from "./ResultModal.tsx";

type timerChallengeProps = {
  title: string;
  targetTime: number;
};

export default function TimerChallenge({
  title,
  targetTime,
}: timerChallengeProps) {
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const timer = useRef<number>();

  function handleStart() {
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
      setIsTimerStarted(false);
    }, targetTime * 1000);

    setIsTimerStarted(true);
    setIsTimerExpired(false);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {isTimerExpired && (
        <ResultModal result={"lost"} targetTime={targetTime} />
      )}
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
