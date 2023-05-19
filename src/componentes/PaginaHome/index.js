import React from "react";
import MoldePagina from "../MoldePagina";
import './style.css'

export default function PaginaHome(){
    return(
        <MoldePagina>
            <section class="section-background">
                <div class="content-limit">
                    <h1><span>Clínica Médica Life<br></br>Aqui a gente cuida de você</span></h1>
                </div>
            </section>
            <section id="sobre" class="section-about">
            <div class="content-limit">
                <h2>Sobre a clínica</h2>
                <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente estrutura, comodidade e com a segurança de que você precisam.</p>
                <div class="section-about-list">
                <div><img class="section-about-img" src="/assets/medico.jpg"/></div>
                <div class="list">
                    <h3>Aqui na nossa clínica você vai encontrar:</h3>
                    <ul>
                        <li>Horário flexível. Atendemos de segunda à sábado.</li>
                        <li>Estacionamento amplo com 600 vagas.</li>
                        <li>Sala de espera com TV e Wifi.</li>
                        <li>Agendamento pelo telefone ou WhatsApp.</li>
                        <li>Excelente localização.</li>
                        <li>Entrega de exames em sua residência</li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
        <section class="section-specialties">
            <div class="content-limit">
                <h3>Uma clínica de multiespecialidade</h3>
                <p>Nossa clínica possui diversas especialidades. Como ortopedia, pediatra, geriatria, psicologia, fisioterapia e outros.</p>
            </div>
            <div class="specialties-boxes">
                <div class="s-box">
                    <img class="s-box-img" src="./assets/ortopedia1.png"/>
                    <p><span>Ortopedia</span></p>
                </div>
                <div class="s-box">
                    <img class="s-box-img" src="./assets/pediatra.png"/>
                    <p><span>Pediatria</span></p>
                </div>
                <div class="s-box">
                    <img class="s-box-img" src="./assets/geriatra.png"/>
                    <p><span>Geriatria</span></p>
                </div>
            </div>
            <div class="bottom">
                <a href="/especialidades">Ver horários</a>
            </div>
        </section>
        <section id="contato" class="section-contact">
            <div class="content-limit">
                <h3>Contato</h3>
                <p>Nossa clínica médica está aberto de <b>segunda à sábado das 6:00 às 21:00</b></p>
                <p>Através do telefone/WhatsApp <b>(21) 99966-5555</b> você pode fazer o agendamento de consultas e exames.</p>
                <p>Estamos localizados no estacionamento do Via Parque Shopping <b>av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro.</b></p>
            </div>
            <div class="aframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7346.000189493264!2d-43.351878000000006!3d-22.987024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1677156155933!5m2!1spt-BR!2sbr" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        </MoldePagina>
    );
}