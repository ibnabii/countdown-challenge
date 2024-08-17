import { forwardRef, useImperativeHandle, useRef } from "react";

type resultModalProps = {
  result: "won" | "lost";
  targetTime: number;
};

export type resultModalHandle = {
  open: () => void;
};

const ResultModal = forwardRef<resultModalHandle, resultModalProps>(
  function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

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
