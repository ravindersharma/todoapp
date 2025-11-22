import { Router } from "express";
import{
    createTask,
    getTasks,
    updateTask,
    deleteTask
} from '../controllers/task.controller.js';

const router= Router();

router.use(auth);

router.post('/',createTask);
router.get('/',getTasks);
router.post('/:id',updateTask);
router.post('/:id',deleteTask);


export default router;