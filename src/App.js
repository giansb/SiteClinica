
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import Rotas from './componentes/Rotas';
import { HashRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/SiteClinica' element={<PaginaHome/>}></Route>
          <Route path='/SiteClinica/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </HashRouter>
    </div>
  );
}

export default App;
