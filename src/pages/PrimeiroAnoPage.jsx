// eslint-disable-next-line
import React from "react";

//import Button from "../components/Button";

import primeiroano from "../assets/1ano.svg";

export default function PrimeiroAno() {
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            O 1º ano do bebé: Desenvolvimento, cuidados e primeiros marcos importantes
          </h1>
          <p className="italic text-zinc-600 mb-6">
          O primeiro ano do bebé é marcado por grandes conquistas: sentar, engatinhar, primeiras palavras e o início da autonomia. É um período de intensa aprendizagem para o bebé e para os pais.
          </p>
           
          <img
                      src={primeiroano}
                      alt="Primeiro Ano do bebe"
                      className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
                    />
    
    
          <div className="prose prose-zinc max-w-none">

            <h2 className="text-xl font-semibold mb-3">1. Saúde e Bem-estar</h2>
            <p className="font-bold">Higiene e rotinas de cuidado</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Estabelecer rotinas de banho e higiene oral (primeiros dentes).</li>
              <li>Cuidados com a pele e unhas.</li>
            </ul>

            <p className="font-bold mt-6">Vacinas e consultas</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Cumprimento do plano nacional de vacinação (DTP, Hib, Pneumococo, entre outras).</li>
              <li>Consultas de vigilância do desenvolvimento (peso, altura, perímetro cefálico).</li>
            </ul>

            <p className="font-bold mt-6">Possíveis doenças</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Vigilância de infeções respiratórias, gastroenterites e otites.</li>
              <li>Prevenção de acidentes domésticos (quedas, ingestão de objetos).</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">2. Parentalidade e Apoio</h2>
            <p className="font-bold">Desafios emocionais dos pais</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Gestão do cansaço e da ansiedade com o crescimento do bebé.</li>
              <li>Importância da partilha de responsabilidades e rede de apoio.</li>
            </ul>

            <p className="font-bold mt-6">Estímulo à autonomia do bebé</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Incentivar pequenas conquistas (alimentar-se sozinho, explorar o espaço).</li>
              <li>Definir limites com paciência e afeto.</li>
            </ul>

            <p className="font-bold mt-6">Dicas parentais</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Valorizar o tempo de qualidade.</li>
              <li>Manter rotinas para dar segurança ao bebé.</li>
              <li>Aceitar que o desenvolvimento é individual e cada bebé tem o seu ritmo.</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">3. Desenvolvimento do Bebé</h2>
            <p className="font-bold">Físico</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Sentar sem apoio, engatinhar, começar a dar os primeiros passos.</li>
              <li>Desenvolvimento da motricidade fina (pegar objetos pequenos).</li>
            </ul>

            <p className="font-bold mt-6">Cognitivo</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Reconhecimento de objetos, pessoas e rotinas.</li>
              <li>Início da linguagem: balbuciar, primeiras palavras.</li>
            </ul>

            <p className="font-bold mt-6">Emocional e social</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Formação do vínculo seguro com os cuidadores.</li>
              <li>Desenvolvimento da noção de separação e primeiras manifestações de personalidade.</li>
            </ul>

            <p className="font-bold mt-6">Cultural</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Estímulo através de músicas, livros ilustrados, brincadeiras simbólicas.</li>
              <li>Criação de hábitos familiares (leituras, canções, festas tradicionais).</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">4. Alimentação</h2>
            <p className="font-bold">Diversificação alimentar</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Introdução de alimentos sólidos a partir dos 6 meses, continuando o leite materno ou fórmula.</li>
              <li>Texturas, sabores e cores variadas para estimular o paladar.</li>
            </ul>

            <p className="font-bold mt-6">Autonomia na alimentação</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Incentivar o bebé a segurar alimentos e usar utensílios com supervisão.</li>
              <li>Paciência com a sujidade e exploração dos alimentos.</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">5. Sono</h2>
            <p className="font-bold">Padrões de sono</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Em média, 12 a 15 horas de sono diárias, incluindo sestas.</li>
              <li>Consolidação de uma rotina noturna previsível.</li>
            </ul>

            <p className="font-bold mt-6">Segurança no sono</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Ambiente calmo e seguro para dormir.</li>
              <li>Manter o berço adequado e seguro até à transição para a cama.</li>
            </ul>

            <hr className="mt-4" />

            <h2 className="text-xl font-semibold my-3">6. Educação e Disciplina Iniciais</h2>
            <p className="font-bold">Parentalidade positiva no 1.º ano</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
              <li>Uso de linguagem simples e positiva.</li>
              <li>Validação das emoções do bebé.</li>
              <li>Estabelecimento de limites claros com amor e paciência.</li>
            </ul>

          </div>

    </div>
  );
}
