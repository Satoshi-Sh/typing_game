import './App.css';
import Opening from "./pages/opening/Opening"
import NoPage  from './pages/nopage/NoPage';
import Easy from './pages/easy/Easy'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="screen">
      <Router>
        <Routes>
          <Route exact path='/' element={<Opening />}/>
          <Route path='/easy' element={<Easy />}/>
          <Route path='*' element= <NoPage /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
