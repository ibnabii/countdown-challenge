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

    const result = remainingTime <= 0 ? "lost" : "won";
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current!.showModal();
        },
      };
    });

    return (
      <dialog className="result-modal" ref={dialog}>
        <h2>You {result}!</h2>
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTimeRemaining} seconds left.</strong>
        </p>
        <form method="dialog">
          <button onClick={onReset}>Close</button>
        </form>
      </dialog>
    );
  },
);

export default ResultModal;
