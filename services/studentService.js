import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async() => {
    const students = await studentModels.fetch();
    return students;
}

export const createStudent = async(student) =>{
    const studentId = await studentModels.insert(student);
    return studentId
}

//UPDATE
export const update = async (student) => {
    const [result] = await pool.query (
        "UPDATE student SET name= ?, srcode= ?, program= ? WHERE id=?",
        [student.name, student.srcode, student.program, student.id]
    );
    return result.affectedRows;
}

//DELET
export const deleteStudent = async(id) =>{
    const deletedstudent = await studentModels.remove(id);
    return deletedstudent;
}