// eslint-disable-next-line
import React from "react";

//import Button from "../components/Button";

export default function AboutPage() {
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o Projeto Cres(Ser)
          </h1>
          <p className="italic text-zinc-600 mb-6">
            O projeto Cres(SER) é uma iniciativa de apoio à parentalidade e promoção da saúde mental na gravidez e na primeira infância, desenvolvida no concelho de Águeda com o envolvimento de diversos parceiros comunitários.
          </p>
    
          
    
    
          <div className="prose prose-zinc max-w-none">
            <h2 className="text-xl font-semibold mb-3">O que é o projeto Cres(SER)?</h2>
            
            <p className="mb-3"> O Cres(SER) é o projeto que dá origem a esta plataforma web. Promovido pelo Centro de Saúde de Águeda e desenvolvido em articulação com parceiros locais — como a câmara municipal, creches, escolas, universidades e entidades sociais — tem como missão apoiar mães, pais e cuidadores desde a gravidez até aos 3 anos de vida da criança.</p>

            <p className="mb-3"> O projeto assenta numa premissa sólida: os primeiros 1000 dias de vida são decisivos para o desenvolvimento emocional, cognitivo e social da criança. Por isso, aposta numa intervenção comunitária, integrada e baseada em evidência científica, com foco na capacitação de quem cuida.</p>

            <p className="font-bold mb-3">A intervenção destina-se a três grupos principais:</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Profissionais de saúde</li>
            <li>Profissionais de educação</li>
            <li>Pais, mães e cuidadores</li>
            </ul>

            <p className="font-bold mt-3">Objetivos do Projeto</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Criar espaços de partilha, escuta ativa e aprendizagem entre pais e cuidadores, desde a gravidez até aos 3 anos do bebé.</li>
            <li>Reforçar o vínculo afetivo entre pais e filhos.</li>
            <li>Promover o desenvolvimento emocional, cognitivo e social saudável da criança.</li>
            <li>Apoiar emocionalmente mães e pais durante o período de gestação e pós-parto.</li>
            <li>Sensibilizar para a importância dos primeiros 1000 dias na construção do bem-estar futuro da criança.</li>
            </ul>

            <p className="font-bold mt-3">Atividades em destaque</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Cres(SER) contigo… na barriga: Grupo para grávidas e pais a partir da 12.ª semana de gestação.</li>
            <li>Cres(SER) contigo… no colo: Grupo para recém-papás durante a licença de maternidade/paternidade.</li>
            <li>Cres(SER) contigo… para a vida: Grupo para mães, pais e cuidadores de crianças até aos 3 anos.</li>
            <li>Caminhar Contigo: Caminhadas semanais com acompanhamento técnico e partilha entre grávidas e mães.</li>
            <li>Sessões práticas sobre temas como sono do bebé, massagem infantil, vinculação, nutrição, birras, entrada na creche, entre muitos outros.</li>
            </ul>

            <p className="font-bold mt-3">Para participar ou saber mais</p>
            <p>Fale com a sua médica ou enfermeira de família, ou contacte diretamente a equipa do Centro de Saúde de Águeda: 234 610 210 (3ªs e 5ªs, das 10h às 13h)</p>
            

            <p className="italic text-3xl my-10">“Se mudarmos o início da história, mudamos toda a história.”</p>

            <p className="font-bold mt-3">Apoio tecnológico e desenvolvimento</p>
            <p>A plataforma web de apoio à parentalidade Cres(SER) foi desenvolvida por Leonardo Coelho, no âmbito do Mestrado em Comunicação e Tecnologias Web da Universidade de Aveiro, integrando as competências de UI/UX Design, Frontend e Backend (Fullstack).</p>

            <p>Esta aplicação tem como objetivo facilitar o acesso a conteúdos, artigos, eventos e recursos personalizados para mães, pais e cuidadores, garantindo uma experiência acessível, intuitiva e cientificamente fundamentada.</p>

          </div>
    </div>
  );
}
