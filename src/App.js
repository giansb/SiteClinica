
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      
      <BrowserRouter basename='/SiteClinica'>
        <switch>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/SiteClinica/especialidades' element={<PaginaEspecialidades/>}></Route>
        </switch>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
