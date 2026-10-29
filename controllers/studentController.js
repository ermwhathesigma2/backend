import * as studentServices from '../services/studentService.js';

export const fetchAllStudent = async(req, res) => {
    const students = await studentServices.fetchAllStudents();
    res.status(200).json(students);
}

export const createStudent = async (req, res) => {
    console.log(req);
    const {name, srcode, program} = req.body;
    const student = {name, srcode, program};

    try{
        const studentId = await studentServices.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}


//UPDATE
export const editStudent = async (req, res) =>{
    const {name, srcode, program} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, srcode, program};

    try{
        const updateStudent = await studentServices.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updateStudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Interval Server Error"
        });
    }
}


///DELETE
export const deleteStudent = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedstudent = await studentServices.deleteStudent(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedstudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}