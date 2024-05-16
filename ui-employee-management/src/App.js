import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEmployee from './employess/AddEmployee';
import EditEmployee from './employess/EditEmployee';
import ViewEmployee from './employess/ViewEmployee';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path={`/edit/:id`} element={<EditEmployee />} />
          <Route path={`/view/:id`} element={<ViewEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
