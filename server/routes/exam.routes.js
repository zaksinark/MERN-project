const ExamController = require('../controllers/exam.controller');

module.exports = app =>{
    app.get('/api/exams', ExamController.findAllExams);
    app.post('/api/exams', ExamController.createExam);
    app.get('/api/exams/:id', ExamController.findOneSingleExam);
    app.put('/api/exams/:id', ExamController.updateExistingExam);
    app.delete('/api/exams/:id', ExamController.deleteAnExistingExam);
}