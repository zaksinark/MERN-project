const Exam = require('../models/exam.model');


module.exports.findAllExams = (req, res) => {
    Exam.find()
        .then((allDaExams) => {
            res.json(allDaExams)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findOneSingleExam = (req, res) =>{
    Exam.findOne({_id: req.params.id})
        .then(oneSingleExam =>{
            res.json(oneSingleExam)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.createExam = (req, res) =>{
    Exam.create(req.body)
        .then(newExam =>{
            res.json(newExam)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.updateExistingExam = (req, res) =>{
    Exam.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedExam =>{
            res.json(updatedExam)})
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingExam = (req, res) =>{
    Exam.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json(result)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}
