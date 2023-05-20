
import './App.css';
import PaginaEspecialidades from './componentes/PaginaEspecialidades';
import PaginaHome from './componentes/PaginaHome';
import { BrowserRouter } from "react-router-dom";
import {Route, Switch } from 'react-router';



function App() {
  return (
    <div>
      
      <BrowserRouter basename='/SiteClinica'>
        <Switch>
          <Route exact path='/' element={<PaginaHome/>}></Route>
          <Route path='/SiteClinica/especialidades' element={<PaginaEspecialidades/>}></Route>
        </Switch>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
