
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import Rotas from './componentes/Rotas';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
