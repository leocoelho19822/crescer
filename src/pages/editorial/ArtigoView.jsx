// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiAlertTriangle, FiPhoneCall } from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

// eslint-disable-next-line
export default function ArtigoView() {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [autorNome, setAutorNome] = useState("");
  const [revisorNome, setRevisorNome] = useState("");

  useEffect(() => {
    fetch("/data/artigos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.artigos.find((a) => a.id === parseInt(id));
        setArtigo(encontrado || null);

        if (encontrado) {
          fetch("/data/users.json")
            .then((res) => res.json())
            .then((udata) => {
              const autor = udata.users.find((u) => u.id === encontrado.autorId);
              const revisor = udata.users.find(
                (u) => u.id === encontrado.revisorId
              );
              setAutorNome(autor ? autor.name : "");
              setRevisorNome(revisor ? revisor.title + " " + revisor.name : "");
            });
        }
      });
  }, [id]);

  if (!artigo) {
    return (
      <div className="min-h-screen bg-gray-100">
        <HeaderEdit user={JSON.parse(localStorage.getItem("user"))} />
        <main className="p-6 max-w-4xl mx-auto text-center">
          <p className="text-gray-600">Artigo não encontrado.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={JSON.parse(localStorage.getItem("user"))} />

      <main className="p-6 max-w-4xl mx-auto bg-white shadow rounded-xl">
        {/* Título e resumo */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {artigo.titulo}
        </h1>
        {artigo.resumo && (
          <p className="text-gray-600 italic mb-6">{artigo.resumo}</p>
        )}

        {/* Autor + Categoria + Data */}
        <div className="mb-6 text-sm text-gray-500 space-y-1">
          <div className="flex justify-between">
            <p>{autorNome && <span>Por {autorNome}</span>}</p>
            <p>{revisorNome && <span>Revisto por {revisorNome}</span>}</p>
          </div>
          <div className="flex justify-between">
            <p>Categoria: {artigo.categoria}</p>
            <p>
              Última atualização em{" "}
              {new Date(artigo.updated_at).toLocaleDateString("pt-PT")}
            </p>
          </div>
        </div>

        {/* Imagem */}
        {artigo.imagem && (
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full rounded-lg shadow mb-6 object-cover"
          />
        )}

        {/* Conteúdo */}
        <div className="prose prose-zinc lg:prose-lg max-w-none">
          {artigo.conteudo?.map((sec, i) => {
            switch (sec.tipo) {
              case "paragrafo":
                return (
                  <p key={i} className="text-gray-800 leading-relaxed mb-4">
                    {sec.texto}
                  </p>
                );
              case "subtitulo":
                return (
                  <h2
                    key={i}
                    className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                  >
                    {sec.texto}
                  </h2>
                );
              case "lista":
                return (
                  <ul key={i} className="list-disc pl-6 mb-4">
                    {sec.itens?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              case "video":
                return (
                  <div key={i} className="my-6 aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${sec.id}`}
                      title="Vídeo"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow"
                    />
                  </div>
                );
              case "fontes":
              return (
                <div key={i} className="mt-12">
                  <h2 className="text-lg font-bold text-zinc-800 mb-4">Fontes</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    {sec.itens.map((fonte, j) => (
                      <li key={j}>{fonte}</li>
                    ))}
                  </ul>
                </div>
              );

              case "alerta":
                return (
                  <div
                    key={i}
                    className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center mb-2">
                      <FiAlertTriangle
                        className="text-zinc-600 mr-2"
                        size={20}
                      />
                      <h2 className="text-base font-bold text-zinc-700">
                        {sec.titulo}
                      </h2>
                    </div>
                    <p className="text-sm text-zinc-800 mb-2">{sec.texto}</p>
                    {sec.nota && (
                      <p className="text-sm text-gray-700 bg-white border-l-4 border-emerald-400 p-2 rounded">
                        {sec.nota}
                      </p>
                    )}
                    {sec.telefone && (
                      <a
                        href={`tel:${sec.telefone}`}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition mt-2"
                      >
                        <FiPhoneCall size={16} />
                        {sec.rotulo}
                      </a>
                    )}
                  </div>
                );
              case "citacao":
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-zinc-300 pl-4 italic text-lg text-zinc-700 my-6"
                  >
                    “{sec.texto}”
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>
      </main>
    </div>
  );
}
