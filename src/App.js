import "./App.scss";
import Deck from "./components/Deck.js";
import Card from "./components/Card.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Deck />} />
            <Route path="/kanas" element={<Deck />} />
            {/*         <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
            <Route path="*" element={<Card />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
