// eslint-disable-next-line
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import logo from '../assets/Logo_Branco.svg';
import logoua from '../assets/ua-logo-branco.svg';
import Button from './Button';
import { useSubscribeNewsletterMutation } from '../store/api';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [subscribe, { isLoading }] = useSubscribeNewsletterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      const response = await subscribe({ email }).unwrap();
      setMessage(response.message || "Subscreveu com sucesso!");
      setIsSuccess(true);
      setEmail("");

      // limpa mensagem após 5s
      setTimeout(() => {
        setMessage("");
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setMessage(error?.data?.message || "Ocorreu um erro. Tente novamente.");
      setIsSuccess(false);
    }
  };

  return (
    <footer className="bg-verde-100 text-white sm:-mt-12 -mt-6">
      <div className="max-w-screen-xl mx-auto px-4 py-16 pt-20">
        {/* Grid com 4 colunas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-semibold mb-4">Projeto</p>
            <ul className="space-y-2">
              <li><a href="/page/sobre">:: Sobre</a></li>
              <li><a href="/page/equipa">:: Equipa</a></li>
              <li><a href="/page/parceiros">:: Parceiros</a></li>
              <li><a href="/page/contato">:: Contatos</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Desenvolvimento</p>
            <ul className="space-y-2">
              <li><a href="/page/1tri">:: 1º Trimestre</a></li>
              <li><a href="/page/2tri">:: 2º Trimestre</a></li>
              <li><a href="/page/3tri">:: 3º Trimestre</a></li>
              <li><a href="/mesames">:: Mês a mês</a></li>
              <li><a href="/page/1ano">:: 1 Ano</a></li>
              <li><a href="/page/18mes">:: 18 meses</a></li>
              <li><a href="/page/2ano">:: 2 Anos</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Comunidade</p>
            <ul className="space-y-2">
              <li><a href="/eventos">:: Eventos</a></li>
              <li><a href="/atividades">:: Atividades</a></li>
              <li><a href="/page/infouteis">:: Informações Úteis</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Legal</p>
            <ul className="space-y-2">
              <li><a href="/page/politica">:: Política de Privacidade</a></li>
              <li><a href="/page/termos">:: Termos e Condições</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white pt-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:max-w-xl">
              <p className="text-white font-semibold mb-1">
                Subscreva a nossa newsletter
              </p>
              <p className="text-white">
                Receba novidades, artigos e recursos diretamente no seu email semanalmente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Digite o seu email"
                  aria-label="Digite o seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  required
                />
                <Button type="submit" className="border border-1" disabled={isLoading}>
                  {isLoading ? "A enviar..." : "Subscrever"}
                </Button>
              </div>

              {message && (
                <p
                  className={`text-sm rounded-lg px-4 py-2 shadow transition ${
                    isSuccess
                      ? "bg-emerald-600 border border-emerald-700 text-white"
                      : "bg-red-600 border border-red-700 text-white"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-[#fff] pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo Cres(SER)" className="h-10" />
            <img src={logoua} alt="Logo UA" className="h-16" />
          </div>

          <ul className="flex items-center gap-4 text-xl" aria-label="Redes sociais">
            <li><a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebook /></a></li>
            <li><a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a></li>
            <li><a href="#" aria-label="GitHub" className="hover:text-gray-300"><FaGithub /></a></li>
            <li><a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
