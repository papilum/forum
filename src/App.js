 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
function App() {
  return (
    <Router>
     
      <Routes>
        <Route  path="/login" element={<Login></Login>} />
        <Route  path="/register" element={<Register></Register>} />
      </Routes>
    </Router>
  );
}

export default App;
