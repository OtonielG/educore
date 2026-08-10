"use client";

import { useEffect, useId, useRef } from "react";
import type { Student } from "@/src/features/students";

type DeleteStudentModalProps = {
  student: Student;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function DeleteStudentModal({
  student,
  onCancel,
  onConfirm,
}: DeleteStudentModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    cancelButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCancel();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements =
        modalRef.current.querySelectorAll<HTMLButtonElement>("button");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement?.isConnected) {
        previousActiveElement.focus();
      }
    };
  }, [onCancel]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="presentation"
    >
      <div
        ref={modalRef}
        className="w-full max-w-sm rounded-2xl bg-dashboard-surface p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <h2 id={titleId} className="font-bespoke text-xl font-semibold">
          Eliminar estudiante
        </h2>

        <p id={descriptionId} className="mt-3 text-sm text-gray-600">
          Esta accion eliminara a {student.fullName} de la lista.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            ref={cancelButtonRef}
            type="button"
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
            onClick={onConfirm}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
