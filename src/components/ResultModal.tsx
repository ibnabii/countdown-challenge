import { forwardRef, useImperativeHandle, useRef } from "react";

type resultModalProps = {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
};

export type resultModalHandle = {
  open: () => void;
};

const ResultModal = forwardRef<resultModalHandle, resultModalProps>(
  function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    const userLost = remainingTime <= 0;
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current!.showModal();
        },
      };
    });

    return (
      <dialog className="result-modal" ref={dialog} onClose={onReset}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTimeRemaining} seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  },
);

export default ResultModal;
