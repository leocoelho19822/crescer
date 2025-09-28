// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CardEvento from "../components/CardEvento";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("/data/eventos.json")
      .then((res) => res.json())
      .then((data) => setEventos(data.eventos));
  }, []);

  const hoje = new Date();
  const proximos = eventos.filter((e) => new Date(e.data) >= hoje);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Eventos na Comunidade</h1>
      <p className="text-lg text-zinc-700 mb-10">
        Nesta secção são divulgados eventos locais direcionados a famílias e crianças, com o objetivo de manter os cuidadores informados sobre atividades de caráter cultural e comunitário.
      </p>

      {proximos.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {proximos.map((e) => (
            <CardEvento key={e.id} {...e} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Não existem eventos agendados no momento.</p>
      )}
    </div>
  );
}
