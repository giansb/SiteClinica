import React from "react";
import Topo from "../Topo";
import Rodape from "../Rodape";

export default function MoldePagina(props){
    return(
        <div>
            <Topo/>
                {props.children}
            <Rodape/>
        </div>
    );
}