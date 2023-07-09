 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route  path="/login" element={<Login></Login>} />
        <Route  path="/register" element={<Register></Register>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
