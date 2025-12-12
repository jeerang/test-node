// src/json.ts
type Student = {
    firstName: string;
    lastName: string;
    age: number;
    gpa: number;
};

const checkStudent = (student: Student): string => {
    if (student.gpa > 2) {
        return JSON.stringify(student);
    }
    return `คุณ ${student.firstName} พ้นสภาพ`;
};

// Example
const s1: Student = { firstName: "Light", lastName: "Boys", age: 21, gpa: 2.5 };
const s2: Student = { firstName: "Jeernag", lastName: "Wongwut", age: 22, gpa: 1.8 };

console.log(checkStudent(s1));
console.log(checkStudent(s2));

exports.checkStudent = checkStudent;
