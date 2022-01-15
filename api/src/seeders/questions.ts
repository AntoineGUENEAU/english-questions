import { IQuestion } from "../models/Question";

export default function questionsSeeder(): IQuestion[] {
    return [
        { name: "What board game do you like the most?" },
        { name: "If you get rid the world of one disease what would it be?" },
        { name: "Your Favorite day of the week?" },
        { name: "If you inherited or won a million dollars, what’s the very first thing you would do with the money?" },
        { name: "Where did your family go on vacations in the summer?" },
        { name: "What jobs do your parents do?" },
        { name: "What time do you normally go to bed?" },
        { name: "How old is your pet?" },
        { name: "If you were in a witness protection program, what would be your new name and where would you go?" },
        { name: "What is your favorite smell?" },
    ];
}
