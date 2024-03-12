import db from "../db/connection.js";  //CONNECTION //
import data from "./data.json" assert { type: "json"}; //JSON DATA
import Question from "../models/Question.js"; //MODEL
import chalk from "chalk";

const insertData = async () => {
   
    await db.dropDatabase()
    await Question.create(data)
    console.log(chalk.greenBright("Questions Created!"))
    await db.close()

}

insertData()