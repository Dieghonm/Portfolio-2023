import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="container">

        <h4 className="about-description">
        Meu trabalho consiste em criar soluções para a web, atuando tanto no desenvolvimento <i>front-end</i> quanto no <i>back-end</i>. Atualmente, estou expandindo meu conhecimento na área de dados.</h4>
        <h4 className="about-description">
        Além disso, adoro a emocionante tarefa de caçar bugs. Passo a maior parte do meu tempo investigando 
        e solucionando problemas, e confesso que me divirto muito com isso...
        </h4>
        <span className="about-content">
          <div>
        <h5 className="about-subtitle">Um pouco sobre mim</h5>
            <p>Desenvolvedor web movido pela curiosidade e prazer em criar coisas que vivem na internet.</p>
            <p>Meu interesse em desenvolvimento começou em 2000 quando um grupo de amigos decidiu criar <i>mod's</i> para um jogo online. Na época, não era tão simples encontrar materiais sobre programação, e mesmo tendo aprendido algumas coisas, minha vida me levou por outros caminhos.</p>
            <p>No final de 2007, me formei em administração de empresas e trabalhei com isso em uma empresa pública até 2019, quando por oportunidade da pandemia eu resolvi finalmente estudar programação e me inscrevi na Trybe, onde aprendi os fundamentos que precisava para seguir com as minhas próprias pernas.</p>
            <p>Em 2022, tive o privilégio de trabalhar em duas <i>start-ups</i>, uma como desenvolvedor <i>front-end</i> e na outra como instrutor de <i>front-end</i>.</p>
            <p>Sou apaixonado por resolver desafios lógicos e dar vida a ideias e projetos de produtos digitais. Atualmente, me dedico a ampliar meus conhecimentos com <i>back-end</i> e com outras linguagens como o <i>Python</i>.</p>
          </div>
        </span>
      </div>
    </section>
  );
}

export default About;

