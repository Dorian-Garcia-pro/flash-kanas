import "./App.scss";
import Nav from "./components/Nav.js";
import Deck from "./components/Deck.js";
import Card from "./components/Card.js";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Histoires from "./pages/Histoires";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Deck />} />
            <Route path="/kanas" element={<Deck />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/daz" element={<Quiz />} />
            <Route path="/histoires" element={<Histoires />} />

            <Route path="*" element={<Card />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
