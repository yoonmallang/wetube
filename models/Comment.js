import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is rquired",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //     video: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref:"Video"
  //   } //또 다른 commnet 작성법
});
const model = mongoose.model("Comment", CommentSchema);
export default model;
