// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CardEvento from "../components/CardAtividade";


export default function Atividades() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("/data/atividades.json")
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
        Atividades do Cres(Ser)
      </h1>
      <p className="text-lg text-zinc-700 mb-8">
        Todos são bem-vindos a participar nas atividades — pais, mães, familiares, cuidadores e educadores. Estes momentos têm como finalidade promover a partilha, incentivar a aprendizagem conjunta e fortalecer a comunidade.
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

      
    </div>
  );
}

