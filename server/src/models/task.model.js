import mongoose  from "mongoose";


const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
    completed:{type: Boolean, default: false},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
},{timestamps:true});

taskSchema.pre("save", async function() {
  if (!mongoose.Types.ObjectId.isValid(this.user)) {
    throw new Error("Invalid user reference");
  }
});



export default mongoose.model("Task",taskSchema);
