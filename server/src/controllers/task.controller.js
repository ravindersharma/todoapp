import Task from '../models/task.model.js';

export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};


export const updateTask=async(req,res,next)=>{
    try {
        const updated= await Task.findOneAndUpdate({
            _id:req.params.id,user:req.user
        },req.body,{new:true});

        res.json(updated);

    } catch (error) {
        next(error);
    }
}

export const deleteTask= async (req,res,next)=>{
   try {
    await Task.findOneAndDelete({_id:req.params.id,user:req.user});
    res.json({message:'Task deleted'});
   } catch (error) {
    next(error);
   }
}