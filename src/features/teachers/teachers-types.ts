export type Teacher = {
  id: string;
  fullName: string;
  code: string;
  birthDate: string;
  phone: string;
  classSubject: string;
  email: string;
  gender: "Masculino" | "Femenino";
};

export type NewTeacher = Omit<Teacher, "id" | "code">;
