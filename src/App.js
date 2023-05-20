
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      
      <BrowserRouter >
        <Routes>
          <Route exact path='/SiteClinica/' element={<PaginaHome/>}></Route>
          <Route path='/SiteClinica/especialidades/' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
