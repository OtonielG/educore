"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STUDENTS_PER_PAGE, type Student } from "@/src/features/students";
import DeletePersonModal from "../../components/shared/delete-person-modal";
import DirectoryPagination from "../../components/shared/directory-pagination";
import { usePaginatedSearch } from "../../components/shared/use-paginated-search";
import { deleteStudent } from "@/src/store/students/slice";
import { selectStudents } from "@/src/store/students/selectors";
import StudentListHeader from "./student-list-header";
import StudentListItem from "./student-list-item";

type StudentsListProps = {
  searchQuery: string;
  onEdit: (student: Student) => void;
};

function matchesStudentQuery(student: Student, normalizedQuery: string) {
  return (
    student.fullName.toLowerCase().includes(normalizedQuery) ||
    student.code.toLowerCase().includes(normalizedQuery) ||
    student.phone.includes(normalizedQuery)
  );
}

export default function StudentsList({
  searchQuery,
  onEdit,
}: StudentsListProps) {
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const {
    filteredItems: filteredStudents,
    visibleItems: visibleStudents,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePaginatedSearch({
    items: students,
    itemsPerPage: STUDENTS_PER_PAGE,
    searchQuery,
    matchesQuery: matchesStudentQuery,
  });

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

          <DirectoryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {studentToDelete ? (
        <DeletePersonModal
          personName={studentToDelete.fullName}
          personType="estudiante"
          onCancel={() => setStudentToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      ) : null}
    </div>
  );
}
