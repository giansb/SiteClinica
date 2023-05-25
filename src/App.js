
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { HashRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    
      
      <HashRouter>
        <Routes>
          <Route path='/' element={<PaginaHome/>}></Route>
          <Route path='/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </HashRouter>
      
   
  );
}

export default App;
