import React from "react";
import MoldePagina from "../MoldePagina";
import './style.css'


export default function PaginaEspecialidades(){
    return(
        <MoldePagina>
        <main>
        <section class="index ">
            <a link href="#ort">Ortopedia</a>
            <a href="#ped">Pediatria</a>
            <a href="#ger">Geriatria</a>
            <a href="#pis">psicologia</a>
            <a href="#fis">fisioterapia</a>
        </section>
        <section id="ort" class="espec">
            <div class="content-limit">
                <h3>Ortopedia</h3>
                <p>A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.</p>
            </div>
            <div class="tab">
                <div class="image"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda e Quarta</td>
                            <td>08:00 ás 13:00</td>
                            <td>Dra. Daniele Almeida</td>
                        </tr>
                        <tr>
                            <td>Terça, Quinta e Sexta</td>
                            <td>14:00 ás 21:00</td>
                            <td>Dr. Daniel Souza</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>08:00 ás 21:00</td>
                            <td>Dr. Manoel Bento</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section id="ped" class="espec">
            <div class="content-limit">
                <h3>Pediatria</h3>
                <p>A pediatria é a especialidade médica dedicada á assistência á criança e ao adolescente, nos seus diversos aspéctos, sejam eles preventivos ou curativos.</p>
            </div>
            <div class="tab">
                <div class="image type2"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda e Quarta</td>
                            <td>08:00 ás 15:00</td>
                            <td>Dra. Elaine Pinheiro</td>
                        </tr>
                        <tr>
                            <td>Terça, Quinta e Sexta</td>
                            <td>13:00 ás 21:00</td>
                            <td>Dr. Anderson Ramos</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>08:00 ás 12:00</td>
                            <td>Dr. Manoela Foster</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section id="ger" class="espec">
            <div class="content-limit">
                <h3>Geriatria</h3>
                <p>Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.</p>
            </div>
            <div class="tab">
                <div class="image type3"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda e Quinta</td>
                            <td>09:00 á 12:00</td>
                            <td>Dr. Antônio Freitas</td>
                        </tr>
                        <tr>
                            <td>Terça e Quarta</td>
                            <td>09:00 ás 16:00</td>
                            <td>Dr. Alfred Conceição</td>
                        </tr>
                        <tr>
                            <td>Sexta</td>
                            <td>08:00 ás 19:00</td>
                            <td>Dr. Almir Aguiar</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>08:00 ás 14:00</td>
                            <td>Dra. Andrea Almeida</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section id="pis" class="espec">
            <div class="content-limit">
                <h3>psicologia</h3>
                <p>Psicologia é a especialidade médica que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.</p>
            </div>
            <div class="tab">
                <div class="image type4"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda,Terça e Quarta</td>
                            <td>08:00 ás 21:00</td>
                            <td>Dra. Diane Fagundes</td>
                        </tr>
                        <tr>
                            <td>Quinta e Sexta</td>
                            <td>14:00 ás 18:00</td>
                            <td>Dr. Daniel Dias</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>10:00 ás 15:00</td>
                            <td>Dra. Beatrix Luz</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section id="fis" class="espec">
            <div class="content-limit">
                <h3>fisioterapia</h3>
                <p>Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas.</p>
            </div>
            <div class="tab">
                <div class="image type5"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Segunda e Quinta</td>
                            <td>12:00 á 20:00</td>
                            <td>Dr. Alberto de Paula</td>
                        </tr>
                        <tr>
                            <td>Segunda e Quarta</td>
                            <td>08:00 ás 15:00</td>
                            <td>Dra. Maria Fernandes</td>
                        </tr>
                        <tr>
                            <td>Terça e Sexta</td>
                            <td>14:00 ás 21:00</td>
                            <td>Dra. Elaine Peixoto</td>
                        </tr>
                        <tr>
                            <td>Terça e Quinta</td>
                            <td>08:00 ás 14:00</td>
                            <td>Dra. Elaine Peixoto</td>
                        </tr>
                        <tr>
                            <td>Quarta e Sábado</td>
                            <td>08:00 ás 21:00</td>
                            <td>Dra. Elaine Peixoto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
    </MoldePagina>
    );
}