import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartil } from './partials/HeaderPartial/HeaderPartial';
import {  AppContext } from './store/AppContext';

const initialState = {
  activePinId: null, 
  mode: null,
  folders: [],
  type: null,
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppContext initialState={initialState}>
      <HeaderPartil/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
      </Routes>
      </AppContext>
    </div>
    </BrowserRouter>
  );
}

export default App;
