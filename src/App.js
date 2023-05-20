
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      
        <swtich>
          <Route exact path='/SiteClinica'><PaginaHome/></Route>
          <Route path='/SiteClinica/especialidades'><PaginaEspecialidades/></Route>
        </swtich>
      
    </div>
  );
}

export default App;
