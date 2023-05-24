
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { HashRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div>
      
      
        <Routes>
          <Route exact path='/' ><PaginaHome/></Route>
          <Route path='/especialidades'><PaginaEspecialidades/></Route>
        </Routes>      
      
      
    </div>
  );
}

export default App;
