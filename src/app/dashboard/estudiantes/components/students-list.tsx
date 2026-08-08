"use client";

import { useState } from "react";
import { STUDENTS_PER_PAGE, students } from "@/src/features/students";
import StudentListHeader from "./student-list-header";
import StudentListItem from "./student-list-item";
import StudentsPagination from "./students-pagination";

export default function StudentsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;

  const visibleStudents = students.slice(
    startIndex,
    startIndex + STUDENTS_PER_PAGE,
  );

  return (
    <div className="mt-6">
      <StudentListHeader />

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
    </div>
  );
}
