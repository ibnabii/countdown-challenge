import { forwardRef } from "react";

type resultModalProps = {
  result: "won" | "lost";
  targetTime: number;
};
const ResultModal = forwardRef<HTMLDialogElement, resultModalProps>(
  function ResultModal({ result, targetTime }, ref) {
    return (
      <dialog className="result-modal" ref={ref}>
        <h2>You {result}!</h2>
        <p>
          The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>X seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  },
);

export default ResultModal;
