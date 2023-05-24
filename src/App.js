
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { HashRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </HashRouter>
      
    </div>
  );
}

export default App;
