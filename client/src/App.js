import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ExamMain from './views/ExamMain';
import ExamCreate from './views/ExamCreate';
import ExamEdit from './views/ExamEdit';
import ExamView from './views/ExamView';


function App() {
  return (
    <div className="App">
        <h1>Store Finder</h1>
      <Routes>
        <Route path={'/'} element={<ExamMain/>}></Route>
        <Route path={'/exams/new'} element={<ExamCreate/>}></Route>
        <Route path={'/exams/:id'} element={<ExamView/>}></Route>
        <Route path={'/exams/edit/:id'} element={<ExamEdit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
