import "./App.scss";
import Nav from "./components/Nav.js";
import Deck from "./components/Deck.js";
import Quiz from "./pages/Quiz";
import Grammaire from "./pages/Grammaire";
import Admin from "./pages/Admin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Histoires from "./pages/Histoires";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/kanas" />} />
            <Route path="/kanas" element={<Deck />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/histoires" element={<Histoires />} />
            <Route path="/grammaire" element={<Grammaire />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Deck />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
