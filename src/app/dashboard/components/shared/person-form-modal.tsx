"use client";

import { type FormEvent, useEffect, useId, useRef } from "react";
import type { NewStudent, Student } from "@/src/features/students";
import type { NewTeacher, Teacher } from "@/src/features/teachers";

type CommonProps = {
  code: string;
  onCancel: () => void;
};

type StudentFormProps = CommonProps & {
  personType: "student";
  person?: Student;
  onSubmit: (student: NewStudent) => void;
};

type TeacherFormProps = CommonProps & {
  personType: "teacher";
  person?: Teacher;
  onSubmit: (teacher: NewTeacher) => void;
};

type PersonFormModalProps = StudentFormProps | TeacherFormProps;

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

function getBirthDateValue(birthDate: string) {
  const dateParts = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  return dateParts
    ? `${dateParts[3]}/${dateParts[2]}/${dateParts[1]}`
    : birthDate;
}

function getTodayDateInputValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function PersonFormModal(props: PersonFormModalProps) {
  const { code, onCancel, person } = props;
  const titleId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const maxBirthDate = getTodayDateInputValue();
  const personLabel = props.personType === "student" ? "estudiante" : "maestro";

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
      if (previousActiveElement?.isConnected) {
        previousActiveElement.focus();
      }
    };
  }, [onCancel]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const commonData = {
      fullName: String(formData.get("fullName")).trim(),
      birthDate: getBirthDateValue(String(formData.get("birthDate"))),
      phone: String(formData.get("phone")).trim(),
      gender: String(formData.get("gender")) as Student["gender"],
    };

    if (props.personType === "student") {
      props.onSubmit({
        ...commonData,
        grade: String(formData.get("grade")) as Student["grade"],
        average: Number(formData.get("average")),
        paymentStatus: String(
          formData.get("paymentStatus"),
        ) as Student["paymentStatus"],
      });
      return;
    }

    props.onSubmit({
      ...commonData,
      classSubject: String(formData.get("classSubject")).trim(),
      email: String(formData.get("email")).trim(),
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
            {person ? "Editar" : "Agregar"} {personLabel}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium sm:col-span-2">
              Nombre completo
              <input
                ref={firstInputRef}
                className={inputClassName}
                type="text"
                name="fullName"
                defaultValue={person?.fullName}
                pattern={"\\s*\\S+\\s+\\S+.*"}
                title="Ingresa al menos dos palabras"
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
                defaultValue={getDateInputValue(person?.birthDate)}
                max={maxBirthDate}
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
                pattern="[0-9]{8}"
                minLength={8}
                maxLength={8}
                title="Ingresa un telefono de 8 numeros"
                defaultValue={person?.phone}
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(
                    /\D/g,
                    "",
                  );
                }}
                required
              />
            </label>

            {props.personType === "student" ? (
              <>
                <label className="text-sm font-medium">
                  Grado
                  <select
                    className={inputClassName}
                    name="grade"
                    defaultValue={props.person?.grade ?? "Primero básico"}
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
                    defaultValue={props.person?.average}
                    required
                  />
                </label>
              </>
            ) : (
              <>
                <label className="text-sm font-medium">
                  Clase que imparte
                  <input
                    className={inputClassName}
                    type="text"
                    name="classSubject"
                    defaultValue={props.person?.classSubject}
                    required
                  />
                </label>

                <label className="text-sm font-medium">
                  Correo electronico
                  <input
                    className={inputClassName}
                    type="email"
                    name="email"
                    defaultValue={props.person?.email}
                    required
                  />
                </label>
              </>
            )}

            <label className="text-sm font-medium">
              Genero
              <select
                className={inputClassName}
                name="gender"
                defaultValue={person?.gender ?? "Masculino"}
                required
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </label>

            {props.personType === "student" ? (
              <label className="text-sm font-medium">
                Estado de pago
                <select
                  className={inputClassName}
                  name="paymentStatus"
                  defaultValue={props.person?.paymentStatus ?? "Solvente"}
                  required
                >
                  <option value="Solvente">Solvente</option>
                  <option value="Moroso">Moroso</option>
                </select>
              </label>
            ) : null}
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
              {person ? "Guardar cambios" : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
