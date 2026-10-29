import * as studentController from '../controllers/studentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudent);
studentRoutes.post('/', studentController.createStudent);

// UPDATE
studentRoutes.put('/:id', studentController.editStudent);

//delete
studentRoutes.delete('/:id', studentController.deleteStudent);

export default studentRoutes;