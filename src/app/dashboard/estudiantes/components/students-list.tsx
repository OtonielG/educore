"use client";

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STUDENTS_PER_PAGE, type Student } from "@/src/features/students";
import { deleteStudent } from "@/src/store/students/slice";
import { selectStudents } from "@/src/store/students/selectors";
import DeleteStudentModal from "./delete-student-modal";
import StudentListHeader from "./student-list-header";
import StudentListItem from "./student-list-item";
import StudentsPagination from "./students-pagination";

type StudentsListProps = {
  searchQuery: string;
  onEdit: (student: Student) => void;
};

export default function StudentsList({
  searchQuery,
  onEdit,
}: StudentsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const normalizedQuery = searchQuery.toLowerCase();
  const filteredStudents = useMemo(() => {
    if (!normalizedQuery) {
      return students;
    }

    return students.filter((student) => {
      return (
        student.fullName.toLowerCase().includes(normalizedQuery) ||
        student.code.toLowerCase().includes(normalizedQuery) ||
        student.phone.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery, students]);

  const totalPages = Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * STUDENTS_PER_PAGE;

  const visibleStudents = filteredStudents.slice(
    startIndex,
    startIndex + STUDENTS_PER_PAGE,
  );

  function handlePageChange(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  }

  function handleConfirmDelete() {
    if (!studentToDelete) {
      return;
    }

    dispatch(deleteStudent(studentToDelete.id));
    setStudentToDelete(null);
  }

  return (
    <div className="mt-6">
      <StudentListHeader />

      {filteredStudents.length === 0 ? (
        <p className="mt-8 font-bespoke font-semibold">No hay resultados</p>
      ) : (
        <>
          <ul>
            {visibleStudents.map((student, index) => (
              <StudentListItem
                key={student.id}
                student={student}
                isEven={index % 2 === 0}
                onEdit={onEdit}
                onDelete={setStudentToDelete}
              />
            ))}
          </ul>

          <StudentsPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {studentToDelete ? (
        <DeleteStudentModal
          student={studentToDelete}
          onCancel={() => setStudentToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      ) : null}
    </div>
  );
}
