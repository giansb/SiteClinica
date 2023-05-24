
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { HashRouter, Routes, route
 } from 'react-router-dom';




function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route exact path='/' ><PaginaHome/></Route>
          <Route path='/especialidades'><PaginaEspecialidades/></Route>
        </Routes>      
      </HashRouter>
      
    </div>
  );
}

export default App;
