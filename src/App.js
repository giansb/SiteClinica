
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { BrowserRouter ,Route, Routes} from "react-router-dom";



function App() {
  return (
    <div>
      
      <BrowserRouter basename='/SiteClinica'>
        <Routes>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
