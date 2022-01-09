import {model, Schema} from "mongoose";

const QuestionSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

interface IQuestion {
  name: string
}

const QuestionModel = model(
  "questions",
  QuestionSchema
);

export {QuestionModel, IQuestion};
