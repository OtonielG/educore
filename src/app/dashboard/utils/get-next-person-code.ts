type PersonWithCode = {
  code: string;
};

export function getNextPersonCode(
  people: PersonWithCode[],
  prefix: string,
) {
  const highestCodeNumber = people.reduce((highest, person) => {
    const codeNumber = Number(person.code.split("-")[1]);
    return Number.isFinite(codeNumber) ? Math.max(highest, codeNumber) : highest;
  }, 0);

  return `${prefix}-${String(highestCodeNumber + 1).padStart(3, "0")}`;
}
