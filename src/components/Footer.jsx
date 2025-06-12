import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Logo_Branco.svg';
import logoua from '../assets/ua-logo-branco.svg';
import aguedalogo from '../assets/agueda-logo-branco.svg';
import simbolo from '../assets/simbolo_cres_ser.svg';

export default function Footer() {
  return (
    <footer className="bg-[#24406F] text-white sm:-mt-12 -mt-6"> ">
      <div className="max-w-screen-xl mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Grid com 2 linhas e 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto_auto] gap-8">
          {/* Linha 1: Siga-nos nas colunas 1 a 3 */}
          <div className="md:col-span-3 flex flex-col items-center">
            <h3 className="text-sm mb-2">Siga-nos</h3>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block w-20 h-px bg-white opacity-60"></span>
              <FaFacebook size={24} className="hover:text-blue-400" />
              <FaInstagram size={24} className="hover:text-pink-400" />
              <span className="hidden sm:block w-20 h-px bg-white opacity-60"></span>
            </div>
          </div>

          {/* Logo decorativo: coluna 4, verticalmente centralizada entre as 2 linhas */}
          <div className="row-span-2 flex justify-center md:justify-end items-center">
            <img src={simbolo} alt="Símbolo Cres(Ser)" className="h-60 opacity-20 hidden md:block" />
          </div>

          {/* Linha 2: 3 colunas de conteúdo */}
          <div>
            <h4 className="font-semibold text-lg mb-2 text-center md:text-left">Desenvolvimento</h4>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>:: 1º Trimestre</li>
              <li>:: 2º Trimestre</li>
              <li>:: 3º Trimestre</li>
              <li>:: Mês a mês</li>
              <li>:: 1 Ano</li>
              <li>:: 2 Anos</li>
              <li>:: 3 Anos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-center md:text-left">O Projeto</h4>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>:: Sobre</li>
              <li>:: Equipa</li>
              <li>:: Fontes</li>
              <li>:: Contatos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-center md:text-left">Comunidade</h4>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>:: Eventos em grupos</li>
              <li>:: Leituras Recomendadas</li>
              <li>:: Conheça nossa App</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="bg-[#192C4D] py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="Logo Cres(SER)" className="h-10" />
            <img src={logoua} alt="Logo UA" className="h-12" />
            <img src={aguedalogo} alt="Logo Águeda" className="h-12" />
          </div>
          <div className="text-xs text-gray-300 text-center md:text-right">
            <p>© 2025 Cres(SER). Todos os direitos reservados.</p>
            <p>
              <a href="#" className="hover:underline">Política de Privacidade</a>
              <span className="mx-1">|</span>
              <a href="#" className="hover:underline">Termos e Condições</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
