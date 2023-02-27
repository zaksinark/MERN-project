const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

require('./server/config/mongoose.config');
const AllMyExamRoutes = require('./server/routes/exam.routes');
AllMyExamRoutes(app);



app.listen(8000, () =>{
    console.log("Listening at Port 8000")
})