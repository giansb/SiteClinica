import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "../PaginaHome";
import PaginaEspecialidades from "../PaginaEspecialidades";


export default function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element = {<PaginaHome/>}/>
                <Route path="/especialidades" element= {<PaginaEspecialidades/>}/>
            </Routes>
        </HashRouter>
    );
}