// eslint-disable-next-line
import React from "react";
import segundoTriImg from "../assets/2tri.svg";

export default function SegundoTrimestrePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-40 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Segundo Trimestre de Gravidez: O equilíbrio entre mudanças e bem-estar
      </h1>
      <p className="italic text-zinc-600 mb-6">
        O segundo trimestre é conhecido como a fase de maior bem-estar na gravidez. Saiba o que acontece com o corpo da mãe, como o bebê se desenvolve e quais os cuidados essenciais para esta etapa.
      </p>

      <img src={segundoTriImg} alt="Segundo Trimestre" className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover" />

      <div className="prose prose-zinc max-w-none">
        <h2  className="text-xl font-semibold mb-3">1. Bem-estar emocional e social da mãe</h2>
        <p className="font-bold">Alterações emocionais</p>
        <p>
          Com a estabilização hormonal, muitas grávidas sentem-se mais equilibradas emocionalmente. A ansiedade inicial diminui e o corpo começa a adaptar-se melhor às mudanças.
        </p>

        <p className="font-bold mt-3">Como lidar com as emoções nesta fase</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Aproveite a energia e o humor mais estável para planear a chegada do bebê.</li>
          <li>Participe em grupos de apoio ou encontros de grávidas.</li>
          <li>Continue a praticar técnicas de relaxamento.</li>
          <li>Fale sobre expectativas e medos com o parceiro ou profissionais de saúde.</li>
        </ul>

        <hr className="mt-4" />

        <h2  className="text-xl font-semibold my-3">2. O meu corpo</h2>
        <p className="font-bold">Sintomas e alterações no corpo</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>A barriga começa a crescer de forma visível.</li>
          <li>Diminuição das náuseas e do cansaço (em muitos casos).</li>
          <li>Aumento do apetite.</li>
          <li>Aparecimento de dores lombares e nas articulações.</li>
          <li>Possível aparecimento de estrias e alterações na pele.</li>
          <li>Sensação de falta de ar ao realizar esforços leves.</li>
        </ul>

        <p className="font-bold mt-3">Possíveis doenças e sinais de alerta</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Anemia gestacional.</li>
          <li>Diabetes gestacional (avaliada entre a 24.ª e a 28.ª semana).</li>
          <li>Vigilância da pressão arterial para prevenir pré-eclâmpsia.</li>
        </ul>

        <p className="font-bold mt-3">Saúde e bem-estar da mãe</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Pratique atividade física leve e adaptada.</li>
          <li>Faça pausas para descanso ao longo do dia.</li>
          <li>Utilize roupas confortáveis e adequadas à gestação.</li>
        </ul>

        <p className="font-bold mt-3">Alimentação saudável</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Continue a suplementação de ferro e cálcio.</li>
          <li>Priorize alimentos ricos em fibras para prevenir obstipação.</li>
          <li>Hidrate-se adequadamente.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">3. O meu bebê</h2>
        <p className="font-bold">Desenvolvimento cognitivo e físico do bebê</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>O bebê começa a ouvir sons externos e a reagir a estímulos.</li>
          <li>Desenvolvimento das feições do rosto.</li>
          <li>Formação das papilas gustativas.</li>
          <li>Aumento da atividade motora (pontapés e movimentos já podem ser sentidos).</li>
          <li>Desenvolvimento dos pulmões, sistema digestivo e imunológico.</li>
        </ul>
        <p className="mt-3">O vínculo afetivo pode ser fortalecido com músicas, conversas e toques suaves na barriga.</p>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">4. Saúde Materna e Cuidados</h2>
        <p className="font-bold">Consultas e exames essenciais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Consulta mensal de vigilância.</li>
          <li>Ecografia morfológica (entre a 20.ª e a 22.ª semana) para avaliar o desenvolvimento fetal.</li>
          <li>Teste de tolerância à glicose (rastreio da diabetes gestacional).</li>
          <li>Monitorização do peso, pressão arterial e sinais de anemia.</li>
        </ul>

        <p className="font-bold mt-3">Amamentação e preparação</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Início de sessões de preparação para o parto e amamentação em algumas unidades de saúde.</li>
          <li>Informação sobre bancos de leite humano e apoio à amamentação.</li>
        </ul>

        <p className="font-bold mt-3">Preparação para o parto</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>É um bom momento para planear o local do parto e discutir preferências com a equipa de saúde.</li>
          <li>Aprender sobre sinais de trabalho de parto e plano de nascimento.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">5. Atividades e Desenvolvimento Cultural</h2>
        <p className="font-bold">Atividades físicas recomendadas</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Caminhadas regulares, natação e yoga para grávidas.</li>
          <li>Alongamentos para aliviar dores lombares.</li>
        </ul>

        <p className="font-bold mt-3">Atividades culturais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Ler para o bebê, promovendo o vínculo afetivo.</li>
          <li>Ouvir músicas relaxantes ou com valor cultural para a família.</li>
          <li>Participar em workshops sobre parentalidade, cuidados ao recém-nascido e amamentação.</li>
        </ul>

        <p className="font-bold mt-3">Dicas para estimular o vínculo e a cultura familiar</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Preparar o quarto do bebê em família.</li>
          <li>Registar momentos da gravidez (fotos, diário).</li>
          <li>Conversar com o bebê, envolvendo irmãos e familiares próximos.</li>
        </ul>

        <p className="font-bold mt-3">Sugestões de leituras e artigos</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Conteúdos sobre o desenvolvimento fetal no segundo trimestre.</li>
          <li>Leituras sobre parentalidade positiva.</li>
          <li>Artigos sobre saúde emocional e bem-estar da grávida.</li>
        </ul>
      </div>
    </div>
  );
}
