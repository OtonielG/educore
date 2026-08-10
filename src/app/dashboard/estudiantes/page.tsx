"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NewStudent, Student } from "@/src/features/students";
import DirectoryToolbar from "../components/shared/directory-toolbar";
import PersonFormModal from "../components/shared/person-form-modal";
import { getNextPersonCode } from "../utils/get-next-person-code";
import { selectStudents } from "@/src/store/students/selectors";
import { addStudent, updateStudent } from "@/src/store/students/slice";
import StudentsList from "./components/students-list";

export default function Estudiantes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState<Student | null>(null);
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  function handleAddStudent(studentData: NewStudent) {
    dispatch(
      addStudent({
        ...studentData,
        id: crypto.randomUUID(),
        code: getNextPersonCode(students, "AL"),
      }),
    );
    setIsAddModalOpen(false);
  }

  function handleUpdateStudent(studentData: NewStudent) {
    if (!studentToEdit) {
      return;
    }

    dispatch(
      updateStudent({
        ...studentData,
        id: studentToEdit.id,
        code: studentToEdit.code,
      }),
    );
    setStudentToEdit(null);
  }

  function handleCloseModal() {
    setIsAddModalOpen(false);
    setStudentToEdit(null);
  }

  return (
    <section className="w-full h-full p-5">
      <div className="bg-dashboard-surface p-5 rounded-3xl">
        <DirectoryToolbar
          title="Todos Los Estudiantes"
          addLabel="Agregar estudiante"
          onAdd={() => setIsAddModalOpen(true)}
          onSearch={setSearchQuery}
        />
        <StudentsList searchQuery={searchQuery} onEdit={setStudentToEdit} />
      </div>

      {isAddModalOpen || studentToEdit ? (
        <PersonFormModal
          personType="student"
          code={studentToEdit?.code ?? getNextPersonCode(students, "AL")}
          person={studentToEdit ?? undefined}
          onCancel={handleCloseModal}
          onSubmit={studentToEdit ? handleUpdateStudent : handleAddStudent}
        />
      ) : null}
    </section>
  );
}
