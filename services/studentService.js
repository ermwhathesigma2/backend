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
export const updateStudent = async(student) =>{
    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}

//DELET
export const deleteStudent = async(id) =>{
    const deletedstudent = await studentModels.remove(id);
    return deletedstudent;
}