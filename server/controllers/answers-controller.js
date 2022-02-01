// Import Answer Model
const Question = require("../models/question.js");
const Answer = require("../models/answer.js");
 
// Get all answer
exports.returnAnswers = async (req, res) => {
    try {
        const answer = await Answer.findAll({
            include:[{model: Question, required:true}]
        });
        return answer;
    } catch (err) {
        console.log(err);
    }
}

exports.getAnswers = async (req, res) => {
    try {
        const answer = await Answer.findAll({
            include:[{model: Question, required:true}]
        });
        res.send(answer);
    } catch (err) {
        console.log(err);
        
    }
}
 
// Get answer by id
exports.getAnswerById = async (req, res) => {
    try {
        const answer = await Answer.findAll({
            where: {
                answer_id: req.params.answer_id
            }, 
            include:[{model: Question, required:true}]
        });
        res.send(answer[0]);
    } catch (err) {
        console.log(err);
    }
}

// Get answers of a question
exports.getAnswerByQuestion = async(req, res) => {
    try {
        const answer = await Answer.findAll({
            where: {
                question_id_fk: req.params.question_id_fk,
            },
            include:[{model: Question, required:true}]
        });
        
        res.send(answer);
    } catch (err) {
        console.log(err);
    }
}

exports.getCorrectAnswerByQuestion = async(t,req, res) => {
    try {
        const answer = await Answer.findAll({
            where: {
                question_id_fk: t,
                answer_points: 10
            },
            include:[{model: Question, required:true}]
        });
        
        return answer[0];
    } catch (err) {
        console.log(err);
    }
}

exports.getIncorrectAnswer1ByQuestion = async(t,req, res) => {
    try {
        const answer = await Answer.findAll({
            where: {
                question_id_fk: t,
                answer_points: 0
            },
            include:[{model: Question, required:true}]
        });
        
        return answer[0];
    } catch (err) {
        console.log(err);
    }
}

exports.getIncorrectAnswer2ByQuestion = async(t,req, res) => {
    try {
        const answer = await Answer.findAll({
            where: {
                question_id_fk: t,
                answer_points: 0
            },
            include:[{model: Question, required:true}]
        });
        
        return answer[1];
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new answer
exports.createAnswer = async (req, res) => {
    try {
        await Answer.create(req.body);
        res.json({
            "message": "Answer Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update answer by id
exports.updateAnswer = async (req, res) => {
    try {
        await Answer.update(req.body, {
            where: {
                answer_id: req.params.answer_id
            }
        });
        res.json({
            "message": "Answer Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete answer by id
exports.deleteAnswer = async (req, res) => {
    try {
        await Answer.destroy({
            where: {
                answer_id: req.params.answer_id
            }
        });
        res.json({
            "message": "Answer Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}