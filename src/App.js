import './App.css';
import Opening from "./pages/opening/Opening"
import NoPage  from './pages/nopage/NoPage';
import Game from './pages/game/Game'
import Score from './pages/score/Score'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="screen">
      <Router>
        <Routes>
          <Route exact path='/' element={<Opening />}/>
          <Route path='/game' element={<Game />}/>
          <Route path='/score' element ={<Score />} />
          <Route path='*' element= {<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
