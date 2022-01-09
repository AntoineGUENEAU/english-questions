import {Request, Response} from "express";
import {getAllQuestions, findRandomQuestion, storeQuestion} from "../../repositories/mongo/questions";

const generateQuestion = async function (req: Request, res: Response) {
  const question = await findRandomQuestion()
  res.json({success: true, question : question.name})
}

const allQuestions = async function (req: Request, res: Response) {
  const questions = getAllQuestions()
  res.json({success: true, questions})
}

const fillQuestions = async function (req: Request, res: Response) {
  const question = await storeQuestion()
  res.json({success: true, question})
}

export {generateQuestion, fillQuestions, allQuestions}
