// eslint-disable-next-line
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import logo from '../assets/Logo_Branco.svg';
import logoua from '../assets/ua-logo-branco.svg';
import Button from './Button';
//import aguedalogo from '../assets/agueda-logo-branco.svg';
//import simbolo from '../assets/simbolo_cres_ser.svg';

export default function Footer() {
  return (
    <footer className="bg-[#78B19A] text-white sm:-mt-12 -mt-6">
      <div className="max-w-screen-xl mx-auto px-4 py-16 pt-20">
        {/* Grid com 4 colunas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Projeto */}
          <div>
            <h4 className="font-semibold mb-4">Projeto</h4>
            <ul className="space-y-2 ">
              <li><a href="/page/sobre">:: Sobre</a></li>
              <li><a href="/page/equipa">:: Equipa</a></li>
              <li><a href="/page/parceiros">:: Parceiros</a></li>
              <li><a href="/page/contato">:: Contatos</a></li>
            </ul>
          </div>

          {/* Coluna 2: Desenvolvimento */}
          <div>
            <h4 className="font-semibold mb-4">Desenvolvimento</h4>
            <ul className="space-y-2 ">
              <li><a href="/page/1tri">:: 1º Trimestre</a></li>
              <li><a href="/page/2tri">:: 2º Trimestre</a></li>
              <li><a href="/page/3tri">:: 3º Trimestre</a></li>
              <li><a href="/mesames">:: Mês a mês</a></li>
              <li><a href="/page/1ano">:: 1 Ano</a></li>
              <li><a href="/page/2ano">:: 2 Anos</a></li>
              <li><a href="/page/3ano">:: 3 Anos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Comunidade */}
          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-2 ">
              <li><a href="/eventos">:: Eventos</a></li>
              
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 ">
              <li><a href="/page/politica">:: Política de Privacidade</a></li>
              <li><a href="/page/termos">:: Termos e Condições</a></li>
              
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
                className="border border-gray-300 rounded-lg px-4 py-2 pr-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <Button>Subscrever</Button>
              
            </form>
          </div>
        </div>


        {/* Rodapé inferior */}
        <div className="border-t border-[#fff] pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo Cres(SER)" className="h-10" />
            <img src={logoua} alt="Logo UA" className="h-16" />
            {/*<img src={aguedalogo} alt="Logo Águeda" className="h-12" />*/}
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
