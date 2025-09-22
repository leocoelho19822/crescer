// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CardEvento from "../components/CardEvento";
import Button from "../components/Button";
import { FiPhoneCall } from "react-icons/fi";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("/data/eventos.json")
      .then((res) => res.json())
      .then((data) => setEventos(data.eventos));
  }, []);

  const hoje = new Date();

  // separar por status
  const ativos = eventos.filter((e) => new Date(e.data) >= hoje && e.ativo);
  const emBreve = eventos.filter((e) => new Date(e.data) >= hoje && !e.ativo);
  const passados = eventos.filter((e) => new Date(e.data) < hoje);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Atividades
      </h1>
      <p className="text-lg text-zinc-700 mb-8">
        Todos são bem-vindos a participar das nossas atividades — pais, mães, familiares
        e cuidadores. Estes momentos são pensados para criar partilha, aprender em
        conjunto e fortalecer a comunidade.
      </p>

      {/* Secção 1: Ativos */}
      {ativos.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Atividades com inscrição ativa</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {ativos.map((e) => (
              <CardEvento key={e.id} {...e} status="ativo" />
            ))}
          </div>
        </>
      )}

      {/* Secção 2: Em breve */}
      {emBreve.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Em breve</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {emBreve.map((e) => (
              <CardEvento key={e.id} {...e} status="em-breve" />
            ))}
          </div>
        </>
      )}

      {/* Secção 3: Passados */}
      {passados.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Atividades passados</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {passados.map((e) => (
              <CardEvento key={e.id} {...e} status="passado" />
            ))}
          </div>
        </>
      )}

      <div className="prose prose-zinc max-w-none text-center mt-16">
        <p className="italic text-3xl my-10">
          “Se mudarmos o início da história, mudamos toda a história.”
        </p>

        <p>
          Fale com a sua médica ou enfermeira de família, ou contacte
          diretamente a equipa do Centro de Saúde de Águeda.
        </p>

        <a href="tel:234610210" aria-label="Ligar para Centro de Saúde de Águeda">
          <Button className="mt-6 inline-flex items-center gap-2 ">
            <FiPhoneCall size={20} />
            <span>234 610 210 (3ªs e 5ªs, 10h às 13h)</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

