import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import Question from './components/Question/Question';




function App() {
  return (
    <div className="App">
      <h3 className='mb-4 text-center d-block'><FontAwesomeIcon icon={faSchool}></FontAwesomeIcon> LEARNING-ACTIVITY</h3>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
