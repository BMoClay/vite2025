import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CornaroLaws from './pages/CornaroLaws';
import VaclavEbs from './pages/VaclavEbs';
import CornaroEdition from './pages/CornaroEdition';
import PulitzerNo from "./pages/PulitzerNo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cornarolaws" element={<CornaroLaws />} />
          <Route path="/vaclavebs" element={<VaclavEbs />} />
          <Route path="/cornaroedition" element={<CornaroEdition/>} />
          <Route path="/pulitzerno" element={<PulitzerNo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
