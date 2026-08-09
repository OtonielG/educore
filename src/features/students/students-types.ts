export type Student = {
  id: number;
  fullName: string;
  code: string;
  birthDate: string;
  phone: string;
  grade: "Primero básico" | "Segundo básico" | "Tercero básico";
  average: number;
  gender: "Masculino" | "Femenino";
  paymentStatus: "Solvente" | "Moroso";
};
