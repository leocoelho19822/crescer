// eslint-disable-next-line
import React from "react";

//import Button from "../components/Button";
import terceiroano from "../assets/3anos.svg";

export default function TerceiroAno() {
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            O 3.º ano do bebé: Autonomia, linguagem e construção da identidade
          </h1>

          <p className="italic text-zinc-600 mb-6">
          Entre os 2 e os 3 anos, o bebé transforma-se numa criança curiosa, faladora e cada vez mais independente. É uma fase de grandes saltos no desenvolvimento social, emocional e cognitivo, marcada pela exploração e pelas primeiras noções de regras e limites.
          </p> 

          <img
                                src={terceiroano}
                                alt="Primeiro Ano do bebe"
                                className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
                              />
          
    
    
          <div className="prose prose-zinc max-w-none">

            <h2 className="text-xl font-semibold mb-3">1. Saúde e Bem-estar</h2>
            <p className="font-bold">Higiene e autocuidado</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Incentivar a lavagem das mãos, escovagem dos dentes e pequenas rotinas de higiene pessoal.</li>
              <li>Primeiras tentativas de autonomia no vestir e despir.</li>
            </ul>

            <p className="font-bold mt-6">Vacinas e consultas</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Reforços vacinais programados e consultas de vigilância de crescimento e desenvolvimento.</li>
              <li>Avaliação da linguagem, comportamento e motricidade.</li>
            </ul>

            <p className="font-bold mt-6">Prevenção de acidentes</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Manter a casa adaptada à mobilidade e à crescente curiosidade (escadas, janelas, produtos perigosos).</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">2. Parentalidade e Apoio</h2>
            <p className="font-bold">Afirmação da autonomia</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Fase do não e necessidade de testar regras.</li>
              <li>Oferecer escolhas controladas para respeitar a vontade da criança sem perder o controlo.</li>
            </ul>

            <p className="font-bold mt-6">Gestão de frustrações e birras</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>As birras fazem parte do desenvolvimento emocional.</li>
              <li>Ensinar a lidar com emoções através do exemplo e da paciência.</li>
            </ul>

            <p className="font-bold mt-6">Dicas parentais</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Manter rotinas consistentes para dar segurança.</li>
              <li>Reforçar comportamentos positivos com elogios e encorajamento.</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">3. Desenvolvimento da Criança</h2>
            <p className="font-bold">Físico</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Maior coordenação motora: correr, saltar, andar em linha reta.</li>
              <li>Desenvolvimento da motricidade fina: desenhar formas simples, virar páginas de livros.</li>
            </ul>

            <p className="font-bold mt-6">Cognitivo</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Evolução da linguagem: construção de frases e aumento do vocabulário.</li>
              <li>Compreensão de conceitos simples (cores, tamanhos, opostos).</li>
            </ul>

            <p className="font-bold mt-6">Emocional e social</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Desenvolvimento da empatia inicial e das primeiras amizades.</li>
              <li>Jogos simbólicos e de imitação mais elaborados.</li>
            </ul>

            <p className="font-bold mt-6">Cultural</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Interesse por histórias mais complexas, músicas e brincadeiras tradicionais.</li>
              <li>Participação em atividades culturais em família (teatro, visitas a museus).</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">4. Alimentação</h2>
            <p className="font-bold">Alimentação saudável e variada</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Incentivar a autonomia nas refeições (usar talheres, servir-se).</li>
              <li>Estimular hábitos alimentares equilibrados, respeitando preferências.</li>
            </ul>

            <p className="font-bold mt-6">Educação alimentar</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Envolver a criança na escolha e preparação de refeições simples.</li>
              <li>Ensinar noções básicas de alimentação saudável de forma lúdica.</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">5. Sono</h2>
            <p className="font-bold">Padrões de sono</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Média de 10 a 12 horas de sono por noite, com ou sem sesta.</li>
              <li>A manutenção das rotinas continua a ser fundamental.</li>
            </ul>

            <p className="font-bold mt-6">Transições</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Se ainda não aconteceu, esta pode ser a fase de transição para uma cama “de crescido”.</li>
              <li>Eventuais medos noturnos começam a surgir (escuro, separação).</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">6. Educação e Disciplina Iniciais</h2>
            <p className="font-bold">Regras e limites com afeto</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Explicações simples e coerentes para as regras.</li>
              <li>Redirecionar comportamentos inadequados sem punições agressivas.</li>
            </ul>

            <p className="font-bold mt-6">Importância da parentalidade positiva</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Validação das emoções, mesmo em situações de birra.</li>
              <li>Encorajar a autonomia e o pensamento crítico desde cedo.</li>
            </ul>

          </div>

    </div>
  );
}
