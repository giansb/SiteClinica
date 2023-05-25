
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { Routes, Route} from 'react-router-dom';




function App() {
  return ( 
        <Routes>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
  );
}

export default App;
