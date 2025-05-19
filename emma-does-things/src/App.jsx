import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/Footer';
import ClickForEmma from './components/ClickForEmma';
import CodeConfessionBooth from './components/CodeConfession';
import EmmaEightBall from './components/EightBall';
import EmmaTreatCatch from './components/EmmaTreatCatch';
import EmmaWalkAdventure from './components/EmmaWalkAdventure';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/click-for-emma" element={<ClickForEmma />} />
          <Route
            path="/code-confession-booth"
            element={<CodeConfessionBooth />}
          />
          <Route path="/eight-ball" element={<EmmaEightBall />} />
          <Route path="/emma-treat-catch" element={<EmmaTreatCatch />} />

          <Route path="/emma-walk-adventure" element={<EmmaWalkAdventure />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
