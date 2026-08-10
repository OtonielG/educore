"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NewTeacher, Teacher } from "@/src/features/teachers";
import DirectoryToolbar from "../components/shared/directory-toolbar";
import PersonFormModal from "../components/shared/person-form-modal";
import { getNextPersonCode } from "../utils/get-next-person-code";
import { selectTeachers } from "@/src/store/teachers/selectors";
import { addTeacher, updateTeacher } from "@/src/store/teachers/slice";
import TeachersList from "./components/teachers-list";

export default function Maestros() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [teacherToEdit, setTeacherToEdit] = useState<Teacher | null>(null);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  function handleAddTeacher(teacherData: NewTeacher) {
    dispatch(
      addTeacher({
        ...teacherData,
        id: crypto.randomUUID(),
        code: getNextPersonCode(teachers, "MT"),
      }),
    );
    setIsAddModalOpen(false);
  }

  function handleUpdateTeacher(teacherData: NewTeacher) {
    if (!teacherToEdit) {
      return;
    }

    dispatch(
      updateTeacher({
        ...teacherData,
        id: teacherToEdit.id,
        code: teacherToEdit.code,
      }),
    );
    setTeacherToEdit(null);
  }

  function handleCloseModal() {
    setIsAddModalOpen(false);
    setTeacherToEdit(null);
  }

  return (
    <section className="w-full h-full p-5">
      <div className="bg-dashboard-surface p-5 rounded-3xl">
        <DirectoryToolbar
          title="Todos Los Maestros"
          addLabel="Agregar maestro"
          onAdd={() => setIsAddModalOpen(true)}
          onSearch={setSearchQuery}
        />
        <TeachersList searchQuery={searchQuery} onEdit={setTeacherToEdit} />
      </div>

      {isAddModalOpen || teacherToEdit ? (
        <PersonFormModal
          personType="teacher"
          code={teacherToEdit?.code ?? getNextPersonCode(teachers, "MT")}
          person={teacherToEdit ?? undefined}
          onCancel={handleCloseModal}
          onSubmit={teacherToEdit ? handleUpdateTeacher : handleAddTeacher}
        />
      ) : null}
    </section>
  );
}
