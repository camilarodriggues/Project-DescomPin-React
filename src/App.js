import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartil } from './partials/HeaderPartial/HeaderPartial';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPartil/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
