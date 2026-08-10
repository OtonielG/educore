"use client";

import { useState } from "react";
import StudentsList from "./components/students-list";
import StudentsToolbar from "./components/students-toolbar";

export default function Estudiantes() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full h-full p-5">
      <div className="bg-dashboard-surface p-5 rounded-3xl">
        <StudentsToolbar onSearch={setSearchQuery} />
        <StudentsList key={searchQuery} searchQuery={searchQuery} />
      </div>
    </section>
  );
}
