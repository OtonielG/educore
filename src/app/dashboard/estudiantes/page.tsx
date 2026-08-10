"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NewStudent, Student } from "@/src/features/students";
import { selectStudents } from "@/src/store/students/selectors";
import { addStudent } from "@/src/store/students/slice";
import AddStudentModal from "./components/add-student-modal";
import StudentsList from "./components/students-list";
import StudentsToolbar from "./components/students-toolbar";

function getNextStudentCode(students: Student[]) {
  const highestCodeNumber = students.reduce((highest, student) => {
    const codeNumber = Number(student.code.split("-")[1]);
    return Number.isFinite(codeNumber) ? Math.max(highest, codeNumber) : highest;
  }, 0);

  return `AL-${String(highestCodeNumber + 1).padStart(3, "0")}`;
}

export default function Estudiantes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  function handleAddStudent(studentData: NewStudent) {
    dispatch(
      addStudent({
        ...studentData,
        id: crypto.randomUUID(),
        code: getNextStudentCode(students),
      }),
    );
    setIsAddModalOpen(false);
  }

  return (
    <section className="w-full h-full p-5">
      <div className="bg-dashboard-surface p-5 rounded-3xl">
        <StudentsToolbar
          onAdd={() => setIsAddModalOpen(true)}
          onSearch={setSearchQuery}
        />
        <StudentsList key={searchQuery} searchQuery={searchQuery} />
      </div>

      {isAddModalOpen ? (
        <AddStudentModal
          code={getNextStudentCode(students)}
          onCancel={() => setIsAddModalOpen(false)}
          onSubmit={handleAddStudent}
        />
      ) : null}
    </section>
  );
}
