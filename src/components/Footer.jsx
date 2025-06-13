import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import logo from '../assets/Logo_Branco.svg';
import logoua from '../assets/ua-logo-branco.svg';
import aguedalogo from '../assets/agueda-logo-branco.svg';
//import simbolo from '../assets/simbolo_cres_ser.svg';

export default function Footer() {
  return (
    <footer className="bg-[#4A6D5F] text-white sm:-mt-12 -mt-6">
      <div className="max-w-screen-xl mx-auto px-4 py-16 pt-20">
        {/* Grid com 4 colunas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Projeto */}
          <div>
            <h4 className="font-semibold mb-4">Projeto</h4>
            <ul className="space-y-2 ">
              <li><a href="#">:: Sobre</a></li>
              <li><a href="#">:: Equipa</a></li>
              <li><a href="#">:: Contatos</a></li>
            </ul>
          </div>

          {/* Coluna 2: Desenvolvimento */}
          <div>
            <h4 className="font-semibold mb-4">Desenvolvimento</h4>
            <ul className="space-y-2 ">
              <li><a href="#">:: 1º Trimestre</a></li>
              <li><a href="#">:: 2º Trimestre</a></li>
              <li><a href="#">:: 3º Trimestre</a></li>
              <li><a href="#">:: Mês a mês</a></li>
              <li><a href="#">:: 1 Ano</a></li>
              <li><a href="#">:: 2 Anos</a></li>
              <li><a href="#">:: 3 Anos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Comunidade */}
          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-2 ">
              <li><a href="#">:: Eventos em grupos</a></li>
              <li><a href="#">:: Recursos pensados para si</a></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 ">
              <li><a href="#">:: Política de Privacidade</a></li>
              <li><a href="#">:: Termos e Condições</a></li>
              <li><a href="#">:: Licença</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter estilo horizontal */}
        <div className="border-t border-white pt-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Texto à esquerda */}
            <div className="md:max-w-xl">
              <h4 className="text-white font-semibold mb-1">
                Subscreva a nossa newsletter
              </h4>
              <p className="text-white/80">
                Receba novidades, artigos e recursos diretamente no seu email semanalmente.
              </p>
            </div>

            {/* Formulário à direita */}
            <form className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Digite o seu email"
                className="flex-1 px-4 py-2 rounded-md bg-[#4A6D5F] text-white border border-white text-sm placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#4A6D5F] font-semibold px-5 py-2 rounded-md text-sm hover:bg-gray-100 transition"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>


        {/* Rodapé inferior */}
        <div className="border-t border-[#fff] pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo Cres(SER)" className="h-10" />
            <img src={logoua} alt="Logo UA" className="h-12" />
            <img src={aguedalogo} alt="Logo Águeda" className="h-12" />
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-4 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-gray-300" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-gray-300" /></a>
            <a href="#" aria-label="GitHub"><FaGithub className="hover:text-gray-300" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="hover:text-gray-300" /></a>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
