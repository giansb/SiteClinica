import React from "react";
import './style.css'
import { HashLink } from "react-router-hash-link";


export default function Topo(){
    return(
        <header>
            <div class="header-content content-limit">
                <div>
                    <a href="/SiteClinica"><img class="logo" src="./assets/logo.png"/></a>
                </div>
                <button>&#9776;</button>
                <ul class="link-list" type="none">
                    <li><HashLink to='/#sobre' smooth>Sobre</HashLink></li>
                    <li><HashLink to="/especialidades">Especialidades</HashLink></li>
                    <li><HashLink to='/#contato' smooth>Contato</HashLink></li>
                </ul>
                
            </div>
    </header>
    );
}