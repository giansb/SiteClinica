import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "../PaginaHome";
import PaginaEspecialidades from "../PaginaEspecialidades";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<PaginaHome/>}/>
                <Route path="/especialidades" element= {<PaginaEspecialidades/>}/>
            </Routes>
        </BrowserRouter>
    );
}