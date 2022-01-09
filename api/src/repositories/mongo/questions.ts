import {IQuestion, QuestionModel} from "../../models/Question";
import connection from "../../dbConnection";
import questionsSeeder from "../../seeders/questions";

export const getAllQuestions = async (): Promise<Array<IQuestion>> => {
  await connection();
  return QuestionModel.find()
}

export const findRandomQuestion = async (): Promise<IQuestion> => {
  await connection();
  const questions = await getAllQuestions()
  return questions[random(0, questions.length)]
}

export const storeQuestion = async (): Promise<void> => {
  await connection();
  questionsSeeder().map( async (questionSeeder) => {
    const question = new QuestionModel(questionSeeder)
    await question.save()
  })
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
