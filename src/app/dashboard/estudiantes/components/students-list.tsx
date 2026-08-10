"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { STUDENTS_PER_PAGE } from "@/src/features/students";
import { selectStudents } from "@/src/store/students/selectors";
import StudentListHeader from "./student-list-header";
import StudentListItem from "./student-list-item";
import StudentsPagination from "./students-pagination";

type StudentsListProps = {
  searchQuery: string;
};

export default function StudentsList({ searchQuery }: StudentsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
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
  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;

  const visibleStudents = filteredStudents.slice(
    startIndex,
    startIndex + STUDENTS_PER_PAGE,
  );

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
              />
            ))}
          </ul>

          <StudentsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
