import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from "./components/quiz/Quiz";
import Weather from "./components/weather/Weather";
import Navbar from "./components/navbar/Navbar"; 
import Todo from "./components/todolist/Todo";
import Food from './components/food/food';
import Error from './components/Error';
import Success from './components/food/Success';
import Disney from './components/disney/Disney'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/food" element={<Food/>} />
        <Route path='/*' element={<Error/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/disney' element={<Disney/>} />
      </Routes>
    </Router>
  );
}
export default App
