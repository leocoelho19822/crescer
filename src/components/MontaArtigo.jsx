// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPhoneCall, FiAlertTriangle, FiShare2, FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

import Button from "../components/Button";
import RecursosPensadosParaSi from "./RecursosPensadosParaSi";

export default function MontaArtigo() {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [favorito, setFavorito] = useState(false);
  const [autorNome, setAutorNome] = useState("");
  const [revisorNome, setRevisorNome] = useState("");

  // carregar artigo
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("/data/artigos.json") 
      .then((res) => {
        if (!res.ok) throw new Error("Artigo não encontrado");
        return res.json();
      })
      .then((data) => {
        const foundArtigo = data.artigos.find((a) => a.slug === id); // procura pelo slug
        if (!foundArtigo) {
          setError(true);
        } else {
          setArtigo(foundArtigo);

          const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
          if (favoritos.includes(foundArtigo.slug)) {
            setFavorito(true);
          }
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);


  // carregar autor/revisor depois do artigo
  useEffect(() => {
    if (!artigo) return;

    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => {
        const autor = data.users.find((u) => u.id === artigo.autor_id);
        const revisor = data.users.find((u) => u.id === artigo.revisor_id);
        setAutorNome(autor ? autor.name : "");
        setRevisorNome(revisor ? revisor.title + " " + revisor.name : "");
      });
  }, [artigo]);

  const toggleFavorito = () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favorito) {
      favoritos = favoritos.filter((fid) => fid !== id);
    } else {
      favoritos.push(id);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    setFavorito(!favorito);
  };

  if (loading) return <p className="text-center mt-24">A carregar...</p>;

  if (error || !artigo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 mt-24 text-center">
        <h1 className="text-3xl font-bold text-zinc-800 mb-4">
          Artigo não encontrado
        </h1>
        <p className="text-gray-600 mb-6">
          O conteúdo que procura não existe ou foi removido.
        </p>
        <a href="/">
          <Button className="mt-4 inline-flex items-center gap-2">
            Voltar à página inicial
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      {/* 1. Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
        {artigo.titulo}
      </h1>

      {/* 2. Resumo */}
      {artigo.resumo && (
        <p className="text-lg italic text-zinc-600 mb-10">{artigo.resumo}</p>
      )}

      {/* 3. Autor + Categoria + Data */}
      <div className="mb-6 text-sm text-gray-500 space-y-1">
        {/* Linha 1 */}
        <div className="flex justify-between">
          <p>{autorNome && <span>Por {autorNome}</span>}</p>
          <p>{revisorNome && <span>Revisto por {revisorNome}</span>}</p>
        </div>

        {/* Linha 2 */}
        <div className="flex justify-between">
          <p>Categoria: {artigo.categoria}</p>
          <p>
            Última atualização em{" "}
            {new Date(artigo.updated_at).toLocaleDateString("pt-PT")}
          </p>
        </div>
      </div>



      {/* 4. Imagem + Ações */}
      {artigo.imagem && (
        <>
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full max-w-4xl mx-auto rounded-lg shadow mb-4 object-cover"
          />

          <div className="flex items-center justify-end space-x-6 mb-10">
            {artigo.icones?.partilha && (
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: artigo.titulo,
                      text: artigo.resumo || "",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copiado para a área de transferência!");
                  }
                }}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition cursor-pointer"
              >
                <FiShare2 size={20} />
                Partilhar
              </button>
            )}

            {artigo.icones?.favorito && (
              <button
                onClick={toggleFavorito}
                className="flex items-center text-gray-500 gap-2 text-sm transition cursor-pointer"
              >
                {favorito ? (
                  <AiFillHeart size={22} className="text-red-600" />
                ) : (
                  <FiHeart size={20} className="text-gray-500 hover:text-red-600" />
                )}
                {favorito ? "Remover dos favoritos" : "Favoritar"}
              </button>
            )}
          </div>
        </>
      )}

      {/* 5. Conteúdo */}
      <div className="prose prose-zinc lg:prose-lg max-w-none mb-20">
        {artigo.conteudo.map((sec, i) => {
          switch (sec.tipo) {
            case "paragrafo":
              return (
                <p key={i} className="text-base text-zinc-800 leading-relaxed mb-4">
                  {sec.texto}
                </p>
              );

            case "subtitulo":
              return (
                <h2
                  key={i}
                  className="text-xl font-semibold text-zinc-900 mt-8 mb-3"
                >
                  {sec.texto}
                </h2>
              );

            case "lista":
              return (
                <div key={i} className="mb-6">
                  {sec.titulo && (
                    <p className="font-bold text-zinc-800 mt-6 mb-2">
                      {sec.titulo}
                    </p>
                  )}
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    {sec.itens.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              );

            case "video":
              return (
                <div key={i} className="my-8 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${sec.id}`}
                    title="Vídeo"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow"
                  />
                </div>
              );

            case "testeConhecimento":
              // eslint-disable-next-line
              const isShown = quizAnswers[i] || false;
              return (
                <div key={i} className="my-20 border rounded-lg p-4 bg-emerald-50">
                  <h2 className="text-lg font-bold text-zinc-800 mb-3">
                    {sec.titulo || "Teste de conhecimento"}
                  </h2>
                  <p className="text-zinc-800 font-medium mb-3">
                    {sec.pergunta}
                  </p>
                  {!isShown ? (
                    <Button
                      onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [i]: true }))
                      }
                    >
                      Mostrar resposta
                    </Button>
                  ) : (
                    <p className="mt-3 text-green-700 font-semibold">
                      {sec.resposta}
                    </p>
                  )}
                </div>
              );

            case "alerta":
              return (
                <div
                  key={i}
                  className="mt-10 p-6 bg-emerald-50 border border-emerald-50 rounded-xl shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <FiAlertTriangle className="text-zinc-600 mr-2" size={24} />
                    <h2 className="text-lg font-bold text-zinc-700">
                      {sec.titulo}
                    </h2>
                  </div>
                  <p className="text-sm text-zinc-800 mb-4 leading-relaxed">
                    {sec.texto}
                  </p>
                  {sec.nota && (
                    <p className="text-sm text-gray-700 bg-white border-l-4 border-emerald-400 p-3 rounded mb-4">
                      {sec.nota}
                    </p>
                  )}
                  {sec.telefone && (
                    <a
                      href={`tel:${sec.telefone}`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                      aria-label="Ligar SNS 24"
                    >
                      <FiPhoneCall size={18} />
                      {sec.rotulo}
                    </a>
                  )}
                </div>
              );

            case "citacao":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-zinc-300 pl-4 italic text-xl md:text-2xl text-zinc-700 my-10"
                >
                  “{sec.texto}”
                </blockquote>
              );

            default:
              return null;
          }
        })}
      </div>

      <hr />

      {/* Recursos relacionados */}
      <RecursosPensadosParaSi tipo={artigo.tipo} />
    </div>
  );
}
