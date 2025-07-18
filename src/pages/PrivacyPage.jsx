// eslint-disable-next-line
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Política de Privacidade
      </h1>

      <div className="prose prose-zinc max-w-none space-y-6">
        <p>
          A sua privacidade é importante para nós. Esta política descreve como recolhemos,
          utilizamos e protegemos os seus dados pessoais na plataforma <strong>Cres(Ser)</strong>,
          desenvolvida no âmbito de um projeto académico do Mestrado em Comunicação e Tecnologias Web
          da Universidade de Aveiro.
        </p>

        <h2 className="font-bold">1. Responsável pelo Tratamento de Dados</h2>
        <p>
          Os dados pessoais recolhidos na plataforma são tratados unicamente para fins académicos e
          científicos. O responsável pelo tratamento é o autor do projeto, sob supervisão da Universidade
          de Aveiro.
        </p>

        <h2 className="font-bold">2. Dados Recolhidos</h2>
        <p>
          Recolhemos apenas os dados estritamente necessários para funcionamento básico da conta do utilizador:
        </p>
        <ul className="list-disc list-inside">
          <li>Nome</li>
          <li>Endereço de e-mail</li>
          <li>Lista de artigos adicionados aos favoritos</li>
        </ul>

        <h2 className="font-bold">3. Finalidade da Recolha</h2>
        <p>
          Os dados são usados exclusivamente para permitir que os utilizadores guardem artigos nos favoritos
          e acedam posteriormente com base na sua conta. Nenhuma informação será utilizada para fins comerciais.
        </p>

        <h2 className="font-bold">4. Partilha de Dados</h2>
        <p>
          Os dados não serão partilhados com terceiros. Esta plataforma é um protótipo académico e não possui qualquer
          integração com anunciantes ou serviços externos.
        </p>

        <h2 className="font-bold">5. Armazenamento e Segurança</h2>
        <p>
          Os dados são armazenados com medidas adequadas de segurança digital. São utilizados mecanismos como
          encriptação e autenticação segura para proteger a informação dos utilizadores registados.
        </p>

        <h2 className="font-bold">6. Direitos dos Utilizadores</h2>
        <p>
          O utilizador pode, a qualquer momento, solicitar a correção ou eliminação dos seus dados através de
          contacto direto com o responsável pelo projeto.
        </p>

        <h2 className="font-bold">7. Cookies</h2>
        <p>
          A plataforma pode utilizar cookies estritamente necessários para o funcionamento técnico e para
          manter sessões autenticadas. Não utilizamos cookies para fins de rastreamento ou publicidade.
        </p>

        <h2 className="font-bold">8. Contacto</h2>
        <p>
          Para esclarecimentos sobre esta Política de Privacidade, pode contactar o responsável pelo projeto através do
          email institucional: <strong>leo.coelho@ua.pt</strong>.
        </p>

        <p className="text-sm italic">
          Última atualização: julho de 2025
        </p>
      </div>
    </div>
  );
}
