// eslint-disable-next-line
import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Termos e Condições
      </h1>

      <div className="prose prose-zinc max-w-none space-y-6">
        <p>
          Bem-vindo à plataforma <strong>Cres(Ser)</strong>. Ao aceder e utilizar este site, concorda com os presentes Termos e Condições.
        </p>
        <p>
          Esta plataforma foi desenvolvida no âmbito de uma dissertação de mestrado na Universidade de Aveiro e destina-se a fins exclusivamente informativos e académicos.
        </p>

        <h2 className="font-bold">1. Objetivo da Plataforma</h2>
        <p>
          A plataforma Cres(Ser) tem como objetivo fornecer conteúdos baseados em evidência científica para apoiar a parentalidade e o desenvolvimento saudável na primeira infância.
          Todo o conteúdo é disponibilizado de forma gratuita e sem qualquer caráter comercial.
        </p>

        <h2 className="font-bold">2. Registo e Conta</h2>
        <p>
          O registo na plataforma é opcional e permite ao utilizador guardar artigos nos favoritos. Ao criar uma conta, o utilizador concorda em fornecer dados verdadeiros
          e manter a confidencialidade das suas credenciais de acesso.
        </p>

        <h2 className="font-bold">3. Uso Aceitável</h2>
        <p>
          O utilizador compromete-se a utilizar a plataforma de forma responsável e ética, abstendo-se de qualquer prática que possa comprometer o seu funcionamento,
          segurança ou a experiência de outros utilizadores.
        </p>

        <h2 className="font-bold">4. Direitos de Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo disponibilizado na plataforma (textos, imagens, gráficos) é protegido por direitos de autor e destina-se exclusivamente a uso pessoal e educativo.
          É proibida a reprodução ou distribuição sem autorização prévia.
        </p>

        <h2 className="font-bold">5. Limitação de Responsabilidade</h2>
        <p>
          Apesar de o conteúdo ser fundamentado em fontes credíveis e revisado com apoio de profissionais, a plataforma não substitui aconselhamento médico ou profissional.
          O utilizador é responsável pela forma como interpreta e aplica a informação aqui disponibilizada.
        </p>

        <h2 className="font-bold">6. Alterações aos Termos</h2>
        <p>
          Estes Termos e Condições podem ser atualizados sem aviso prévio para refletir melhorias na plataforma ou alterações legais.
          A versão mais recente estará sempre disponível nesta página.
        </p>

        <h2 className="font-bold">7. Contacto</h2>
        <p>
          Para questões relacionadas com estes Termos e Condições, o utilizador pode entrar em contacto com o responsável pelo projeto através do e-mail institucional: <strong>leo.coelho@ua.pt</strong>.
        </p>

        <p className="text-sm italic">
          Última atualização: julho de 2025
        </p>
      </div>
    </div>
  );
}
