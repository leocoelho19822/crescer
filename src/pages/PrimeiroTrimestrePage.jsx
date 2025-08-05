// eslint-disable-next-line
import React from "react";
import primeiroTriImg from "../assets/1tri.svg";

export default function PrimeiroTrimestrePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Primeiro Trimestre de Gravidez: O que esperar e como se cuidar
      </h1>
      <p className="italic text-zinc-600 mb-6">
        Descubra o que acontece no primeiro trimestre da gravidez: mudanças no corpo e nas emoções,
        desenvolvimento do bebê, exames essenciais, cuidados e atividades para fortalecer o bem-estar e o
        vínculo familiar.
      </p>

      <img
        src={primeiroTriImg}
        alt="Primeiro Trimestre"
        className="rounded-lg mb-8 mx-auto w-full max-w-3xl h-120 object-cover"
        />


      <div className="prose prose-zinc max-w-none">
        <h2 className="text-xl font-semibold mb-3">1. Bem-estar emocional e social da mãe</h2>
        <p className="font-bold">Alterações emocionais</p>
        <p className="mb-3"> O início da gravidez traz uma montanha-russa de emoções. Oscilações de humor, ansiedade, choro fácil e até momentos de euforia são comuns, causados pelas alterações hormonais (aumento de progesterona e estrogénio) e pela adaptação à nova realidade.</p>

        <p className="font-bold">Como lidar com as emoções nesta fase</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Aceitar que é normal: Não se culpe por sentir-se mais sensível ou cansada emocionalmente.</li>
          <li>Partilhar sentimentos: Converse com o parceiro, amigos ou um profissional de saúde.</li>
          <li>Praticar técnicas de relaxamento: Exercícios de respiração, meditação e caminhadas leves ajudam a equilibrar as emoções.</li>
          <li>Rede de apoio: Valorize a convivência social com pessoas que acolhem e entendem esta fase.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">2. O meu corpo</h2>
        <p className="font-bold">Sintomas e alterações no corpo</p>
        <p>No primeiro trimestre, os sintomas mais comuns incluem:</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Náuseas e vómitos (principalmente de manhã)</li>
          <li>Cansaço excessivo</li>
          <li>Tensão mamária e aumento do volume dos seios</li>
          <li>Aumento da frequência urinária</li>
          <li>Alterações no paladar e olfato</li>
          <li>Alterações de humor</li>
        </ul>

        <p className="font-bold mt-6">Possíveis doenças e sinais de alerta</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Hemorragias intensas e dores fortes devem ser avaliadas rapidamente.</li>
          <li>Infecções urinárias são mais frequentes e devem ser tratadas.</li>
          <li>Monitorização da pressão arterial e controlo do peso são importantes desde o início.</li>
        </ul>

        <p className="font-bold mt-6">Saúde e bem-estar da mãe</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Hidrate-se bem e faça refeições leves e frequentes.</li>
          <li>Priorize o descanso e respeite o ritmo do seu corpo.</li>
          <li>Não pratique automedicação.</li>
        </ul>

        <p className="font-bold mt-6">Alimentação saudável</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Aumente o consumo de frutas, vegetais, cereais integrais e proteínas magras.</li>
          <li>Consuma ácido fólico, ferro e cálcio conforme orientação médica.</li>
          <li>Evite alimentos ultraprocessados, cafeína em excesso, bebidas alcoólicas e mariscos crus.</li>
        </ul>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">3. O meu bebê</h2>
        <p className="font-bold">Desenvolvimento cognitivo e físico do bebê</p>
        <p>No primeiro trimestre, ocorrem as fases mais críticas do desenvolvimento fetal:</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Formação do tubo neural (futuro cérebro e medula espinhal)</li>
          <li>Desenvolvimento do coração (bate a partir da 6.ª semana)</li>
          <li>Formação inicial de braços, pernas, olhos, ouvidos e órgãos internos</li>
          <li>Começo da formação do sistema nervoso central</li>
        </ul>
        <p>Ainda não há estímulos cognitivos conscientes, mas a alimentação e os cuidados da mãe são fundamentais para o desenvolvimento saudável do bebê.</p>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">4. Saúde Materna e Cuidados</h2>
        <p className="font-bold">Consultas e exames essenciais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Primeira consulta pré-natal até à 10.ª semana.</li>
          <li>Exames laboratoriais iniciais: hemograma, glicemia, urina, tipagem sanguínea, toxoplasmose, rubéola, HIV, sífilis, hepatite B e C.</li>
          <li>Ecografia do 1.º trimestre (datagem da gravidez, avaliação da vitalidade e número de fetos).</li>
        </ul>

        <p className="font-bold mt-6">Amamentação e preparação precoce</p>
        <p>Apesar de ainda distante, é importante começar a informar-se sobre a amamentação, desmistificando mitos e criando um plano de apoio.</p>

        <hr className="mt-4" />

        <h2 className="text-xl font-semibold my-3">5. Atividades e Desenvolvimento Cultural</h2>
        <p className="font-bold">Atividades físicas recomendadas</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Caminhadas leves e alongamentos</li>
          <li>Yoga ou pilates para grávidas (se autorizado pelo médico)</li>
          <li>Exercícios respiratórios para relaxamento</li>
        </ul>

        <p className="font-bold mt-6">Atividades culturais</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Ouvir música suave (estimula o bem-estar da mãe)</li>
          <li>Leituras para o bebê (desde já cria-se um vínculo afetivo)</li>
          <li>Participar em eventos ou palestras sobre maternidade</li>
        </ul>

        <p className="font-bold mt-6">Dicas para estimular o vínculo e a cultura familiar</p>
        <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
          <li>Partilhe momentos de tranquilidade com o parceiro, falando sobre o bebê.</li>
          <li>Estimule conversas sobre os valores e tradições da família.</li>
        </ul>
      </div>
    </div>
  );
}
