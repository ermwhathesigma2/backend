import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async() => {
    const students = await studentModels.fetch();
    return students;
}

export const createStudent = async(student) =>{
    const studentId = await studentModels.insert(student);
    return studentId
}

export const update = async (student) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, srcode= ?, author= ? WHERE id=?",
        [student.name, student.srcode, student.author, student.id]
    );
    return result.affectedRows;
}