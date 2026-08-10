"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEACHERS_PER_PAGE, type Teacher } from "@/src/features/teachers";
import DeletePersonModal from "../../components/shared/delete-person-modal";
import DirectoryPagination from "../../components/shared/directory-pagination";
import { usePaginatedSearch } from "../../components/shared/use-paginated-search";
import { selectTeachers } from "@/src/store/teachers/selectors";
import { deleteTeacher } from "@/src/store/teachers/slice";
import TeacherListHeader from "./teacher-list-header";
import TeacherListItem from "./teacher-list-item";

type TeachersListProps = {
  searchQuery: string;
  onEdit: (teacher: Teacher) => void;
};

function matchesTeacherQuery(teacher: Teacher, normalizedQuery: string) {
  return (
    teacher.fullName.toLowerCase().includes(normalizedQuery) ||
    teacher.code.toLowerCase().includes(normalizedQuery) ||
    teacher.phone.includes(normalizedQuery) ||
    teacher.classSubject.toLowerCase().includes(normalizedQuery) ||
    teacher.email.toLowerCase().includes(normalizedQuery)
  );
}

export default function TeachersList({
  searchQuery,
  onEdit,
}: TeachersListProps) {
  const [teacherToDelete, setTeacherToDelete] = useState<Teacher | null>(null);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const {
    filteredItems: filteredTeachers,
    visibleItems: visibleTeachers,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePaginatedSearch({
    items: teachers,
    itemsPerPage: TEACHERS_PER_PAGE,
    searchQuery,
    matchesQuery: matchesTeacherQuery,
  });

  function handleConfirmDelete() {
    if (!teacherToDelete) {
      return;
    }

    dispatch(deleteTeacher(teacherToDelete.id));
    setTeacherToDelete(null);
  }

  return (
    <div className="mt-6">
      <TeacherListHeader />

      {filteredTeachers.length === 0 ? (
        <p className="mt-8 font-bespoke font-semibold">No hay resultados</p>
      ) : (
        <>
          <ul>
            {visibleTeachers.map((teacher, index) => (
              <TeacherListItem
                key={teacher.id}
                teacher={teacher}
                isEven={index % 2 === 0}
                onEdit={onEdit}
                onDelete={setTeacherToDelete}
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

      {teacherToDelete ? (
        <DeletePersonModal
          personName={teacherToDelete.fullName}
          personType="maestro"
          onCancel={() => setTeacherToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      ) : null}
    </div>
  );
}
