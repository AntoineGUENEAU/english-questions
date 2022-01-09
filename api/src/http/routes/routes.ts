import express, {Router} from "express";
import {generateQuestion, fillQuestions, allQuestions} from "../controllers/questionController";
import dotenv from "dotenv";

const router: Router = express.Router();
dotenv.config();
router.get('/', generateQuestion)
if(process.env.ENV === 'dev'){
  router.get('/debug/all', allQuestions)
  router.get('/debug/fill', fillQuestions)
}

export {router};
