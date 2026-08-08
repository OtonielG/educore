"use client";

import { useState } from "react";
import type { Student } from "../types";
import StudentListHeader from "./student-list-header";
import StudentListItem from "./student-list-item";
import StudentsPagination from "./students-pagination";

const students: Student[] = [
  {
    id: 1,
    fullName: "Carlos Hernández López",
    code: "AL-001",
    birthDate: "12/03/2011",
    phone: "55581234",
    grade: "Primero básico",
    average: 82,
    gender: "Masculino",
  },
  {
    id: 2,
    fullName: "María Fernanda López",
    code: "AL-002",
    birthDate: "25/07/2010",
    phone: "51234567",
    grade: "Segundo básico",
    average: 91,
    gender: "Femenino",
  },
  {
    id: 3,
    fullName: "José Antonio Martínez",
    code: "AL-003",
    birthDate: "08/11/2009",
    phone: "59874521",
    grade: "Tercero básico",
    average: 76,
    gender: "Masculino",
  },
  {
    id: 4,
    fullName: "Ana Sofía Rodríguez",
    code: "AL-004",
    birthDate: "17/01/2011",
    phone: "54671289",
    grade: "Primero básico",
    average: 88,
    gender: "Femenino",
  },
  {
    id: 5,
    fullName: "Luis Fernando García",
    code: "AL-005",
    birthDate: "04/05/2010",
    phone: "58741236",
    grade: "Segundo básico",
    average: 69,
    gender: "Masculino",
  },
  {
    id: 6,
    fullName: "Sofía Alejandra Morales",
    code: "AL-006",
    birthDate: "29/09/2009",
    phone: "52369874",
    grade: "Tercero básico",
    average: 94,
    gender: "Femenino",
  },
  {
    id: 7,
    fullName: "Daniel Alejandro Pérez",
    code: "AL-007",
    birthDate: "14/02/2011",
    phone: "53698741",
    grade: "Primero básico",
    average: 73,
    gender: "Masculino",
  },
  {
    id: 8,
    fullName: "Valeria Isabel Castillo",
    code: "AL-008",
    birthDate: "21/06/2010",
    phone: "57412369",
    grade: "Segundo básico",
    average: 86,
    gender: "Femenino",
  },
  {
    id: 9,
    fullName: "Miguel Ángel Ramírez",
    code: "AL-009",
    birthDate: "09/10/2009",
    phone: "56897412",
    grade: "Tercero básico",
    average: 78,
    gender: "Masculino",
  },
  {
    id: 10,
    fullName: "Camila Andrea González",
    code: "AL-010",
    birthDate: "03/04/2011",
    phone: "54123698",
    grade: "Primero básico",
    average: 90,
    gender: "Femenino",
  },
  {
    id: 11,
    fullName: "Fernando Estuardo Díaz",
    code: "AL-011",
    birthDate: "18/08/2010",
    phone: "58963214",
    grade: "Segundo básico",
    average: 71,
    gender: "Masculino",
  },
  {
    id: 12,
    fullName: "Lucía Fernanda Herrera",
    code: "AL-012",
    birthDate: "27/12/2009",
    phone: "54789632",
    grade: "Tercero básico",
    average: 95,
    gender: "Femenino",
  },
  {
    id: 13,
    fullName: "Andrés Eduardo Méndez",
    code: "AL-013",
    birthDate: "11/03/2011",
    phone: "59632147",
    grade: "Primero básico",
    average: 84,
    gender: "Masculino",
  },
  {
    id: 14,
    fullName: "Isabella María Reyes",
    code: "AL-014",
    birthDate: "30/07/2010",
    phone: "53214789",
    grade: "Segundo básico",
    average: 89,
    gender: "Femenino",
  },
  {
    id: 15,
    fullName: "Javier Alejandro Vásquez",
    code: "AL-015",
    birthDate: "06/11/2009",
    phone: "57896321",
    grade: "Tercero básico",
    average: 67,
    gender: "Masculino",
  },
  {
    id: 16,
    fullName: "Daniela Paola Aguilar",
    code: "AL-016",
    birthDate: "23/01/2011",
    phone: "51478963",
    grade: "Primero básico",
    average: 92,
    gender: "Femenino",
  },
  {
    id: 17,
    fullName: "Diego Armando López",
    code: "AL-017",
    birthDate: "15/05/2010",
    phone: "56321478",
    grade: "Segundo básico",
    average: 74,
    gender: "Masculino",
  },
  {
    id: 18,
    fullName: "Gabriela Alejandra Fuentes",
    code: "AL-018",
    birthDate: "02/09/2009",
    phone: "58796314",
    grade: "Tercero básico",
    average: 87,
    gender: "Femenino",
  },
  {
    id: 19,
    fullName: "Alejandro José Ortiz",
    code: "AL-019",
    birthDate: "20/02/2011",
    phone: "53621479",
    grade: "Primero básico",
    average: 80,
    gender: "Masculino",
  },
  {
    id: 20,
    fullName: "Natalia Fernanda Cabrera",
    code: "AL-020",
    birthDate: "13/06/2010",
    phone: "57489613",
    grade: "Segundo básico",
    average: 93,
    gender: "Femenino",
  },
  {
    id: 21,
    fullName: "Sebastián Andrés Castro",
    code: "AL-021",
    birthDate: "28/10/2009",
    phone: "52147896",
    grade: "Tercero básico",
    average: 72,
    gender: "Masculino",
  },
  {
    id: 22,
    fullName: "Paula Andrea Mendoza",
    code: "AL-022",
    birthDate: "07/04/2011",
    phone: "58974123",
    grade: "Primero básico",
    average: 85,
    gender: "Femenino",
  },
  {
    id: 23,
    fullName: "Mateo Alejandro Rivera",
    code: "AL-023",
    birthDate: "16/08/2010",
    phone: "54712398",
    grade: "Segundo básico",
    average: 77,
    gender: "Masculino",
  },
  {
    id: 24,
    fullName: "Andrea Lucía Soto",
    code: "AL-024",
    birthDate: "01/12/2009",
    phone: "56398712",
    grade: "Tercero básico",
    average: 96,
    gender: "Femenino",
  },
  {
    id: 25,
    fullName: "Emilio José Vargas",
    code: "AL-025",
    birthDate: "24/03/2011",
    phone: "59874126",
    grade: "Primero básico",
    average: 68,
    gender: "Masculino",
  },
  {
    id: 26,
    fullName: "Regina Sofía Salazar",
    code: "AL-026",
    birthDate: "10/07/2010",
    phone: "53269874",
    grade: "Segundo básico",
    average: 90,
    gender: "Femenino",
  },
  {
    id: 27,
    fullName: "Nicolás Eduardo Flores",
    code: "AL-027",
    birthDate: "19/11/2009",
    phone: "57841269",
    grade: "Tercero básico",
    average: 79,
    gender: "Masculino",
  },
  {
    id: 28,
    fullName: "Mariana Isabel Rojas",
    code: "AL-028",
    birthDate: "05/01/2011",
    phone: "51496328",
    grade: "Primero básico",
    average: 88,
    gender: "Femenino",
  },
  {
    id: 29,
    fullName: "Samuel David Guerra",
    code: "AL-029",
    birthDate: "22/05/2010",
    phone: "56987412",
    grade: "Segundo básico",
    average: 75,
    gender: "Masculino",
  },
  {
    id: 30,
    fullName: "Elena María Miranda",
    code: "AL-030",
    birthDate: "12/09/2009",
    phone: "58741296",
    grade: "Tercero básico",
    average: 97,
    gender: "Femenino",
  },
  {
    id: 31,
    fullName: "David Alejandro Escobar",
    code: "AL-031",
    birthDate: "26/02/2011",
    phone: "53698724",
    grade: "Primero básico",
    average: 81,
    gender: "Masculino",
  },
  {
    id: 32,
    fullName: "Sara Fernanda Monroy",
    code: "AL-032",
    birthDate: "08/06/2010",
    phone: "57412963",
    grade: "Segundo básico",
    average: 89,
    gender: "Femenino",
  },
  {
    id: 33,
    fullName: "Ángel Estuardo Molina",
    code: "AL-033",
    birthDate: "17/10/2009",
    phone: "52149687",
    grade: "Tercero básico",
    average: 70,
    gender: "Masculino",
  },
  {
    id: 34,
    fullName: "Adriana Sofía Pineda",
    code: "AL-034",
    birthDate: "04/04/2011",
    phone: "59876321",
    grade: "Primero básico",
    average: 92,
    gender: "Femenino",
  },
  {
    id: 35,
    fullName: "Pablo Andrés Alvarado",
    code: "AL-035",
    birthDate: "31/08/2010",
    phone: "54789621",
    grade: "Segundo básico",
    average: 83,
    gender: "Masculino",
  },
];

const STUDENTS_PER_PAGE = 10;

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
