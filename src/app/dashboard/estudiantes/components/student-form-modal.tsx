"use client";

import { FormEvent, useEffect, useId, useRef } from "react";
import type { NewStudent, Student } from "@/src/features/students";

type StudentFormModalProps = {
  code: string;
  student?: Student;
  onCancel: () => void;
  onSubmit: (student: NewStudent) => void;
};

const inputClassName =
  "mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:border-dashboard-accent";

function getDateInputValue(birthDate?: string) {
  if (!birthDate) {
    return undefined;
  }

  const dateParts = birthDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  return dateParts
    ? `${dateParts[3]}-${dateParts[2]}-${dateParts[1]}`
    : birthDate;
}

function getStudentBirthDateValue(birthDate: string) {
  const dateParts = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return dateParts
    ? `${dateParts[3]}/${dateParts[2]}/${dateParts[1]}`
    : birthDate;
}

export default function StudentFormModal({
  code,
  student,
  onCancel,
  onSubmit,
}: StudentFormModalProps) {
  const titleId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const previousActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    firstInputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCancel();
        return;
      }

      if (event.key !== "Tab" || !formRef.current) {
        return;
      }

      const focusableElements = formRef.current.querySelectorAll<HTMLElement>(
        "input:not([disabled]), select:not([disabled]), button:not([disabled])",
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onCancel]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onSubmit({
      fullName: String(formData.get("fullName")).trim(),
      birthDate: getStudentBirthDateValue(String(formData.get("birthDate"))),
      phone: String(formData.get("phone")).trim(),
      grade: String(formData.get("grade")) as Student["grade"],
      average: Number(formData.get("average")),
      gender: String(formData.get("gender")) as Student["gender"],
      paymentStatus: String(
        formData.get("paymentStatus"),
      ) as Student["paymentStatus"],
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-dashboard-surface shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <form
          ref={formRef}
          className="max-h-[90vh] overflow-y-auto p-6"
          onSubmit={handleSubmit}
        >
          <h2 id={titleId} className="font-bespoke text-xl font-semibold">
            {student ? "Editar estudiante" : "Agregar estudiante"}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium sm:col-span-2">
              Nombre completo
              <input
                ref={firstInputRef}
                className={inputClassName}
                type="text"
                name="fullName"
                defaultValue={student?.fullName}
                required
              />
            </label>

            <label className="text-sm font-medium">
              Codigo
              <input
                className={inputClassName}
                type="text"
                value={code}
                readOnly
              />
            </label>

            <label className="text-sm font-medium">
              Fecha de nacimiento
              <input
                className={inputClassName}
                type="date"
                name="birthDate"
                defaultValue={getDateInputValue(student?.birthDate)}
                required
              />
            </label>

            <label className="text-sm font-medium">
              Telefono
              <input
                className={inputClassName}
                type="tel"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]+"
                defaultValue={student?.phone}
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(
                    /\D/g,
                    "",
                  );
                }}
                required
              />
            </label>

            <label className="text-sm font-medium">
              Grado
              <select
                className={inputClassName}
                name="grade"
                defaultValue={student?.grade ?? "Primero básico"}
                required
              >
                <option value="Primero básico">Primero basico</option>
                <option value="Segundo básico">Segundo basico</option>
                <option value="Tercero básico">Tercero basico</option>
              </select>
            </label>

            <label className="text-sm font-medium">
              Promedio
              <input
                className={inputClassName}
                type="number"
                name="average"
                min="0"
                max="100"
                defaultValue={student?.average}
                required
              />
            </label>

            <label className="text-sm font-medium">
              Genero
              <select
                className={inputClassName}
                name="gender"
                defaultValue={student?.gender ?? "Masculino"}
                required
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </label>

            <label className="text-sm font-medium">
              Estado de pago
              <select
                className={inputClassName}
                name="paymentStatus"
                defaultValue={student?.paymentStatus ?? "Solvente"}
                required
              >
                <option value="Solvente">Solvente</option>
                <option value="Moroso">Moroso</option>
              </select>
            </label>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              onClick={onCancel}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-full bg-dashboard-accent px-4 py-2 text-sm font-medium text-dashboard-surface hover:bg-dashboard-accent/80"
            >
              {student ? "Guardar cambios" : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
