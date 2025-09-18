// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPhoneCall, FiAlertTriangle, FiShare2 } from "react-icons/fi";
import Button from "../components/Button";
import RecursosPensadosParaSi from "./RecursosPensadosParaSi";

export default function MontaPage() {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});


  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("/data/pages.json")
      .then((res) => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.json();
      })
      .then((data) => {
  const foundPage = data.pages.find((p) => p.id === id);
  if (!foundPage) {
    setError(true);
  } else {
    setPage(foundPage);
  }
  setLoading(false);
})

      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-24">A carregar...</p>;

  if (error || !page) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 mt-24 text-center">
        <h1 className="text-3xl font-bold text-zinc-800 mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-6">
          O conteúdo que procura não existe ou foi removido.
        </p>
        <a
          href="/"
          
        >
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
        {page.titulo}
      </h1>

      {/* 2. Resumo */}
      {page.resumo && (
        <p className="text-lg italic text-zinc-600 mb-6">{page.resumo}</p>
      )}

      {/* 3. Autor + Data + Partilhar */}
        {(page.autor || page.data) && (
        <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">
            {page.autor && <span>Por {page.autor}</span>}
            </p>
            <p className="text-sm text-gray-500">
            {page.autor && page.data && " • "}
            </p>
            <p className="text-sm text-gray-500">
            {page.data && (
                <span>Em {new Date(page.data).toLocaleDateString("pt-PT")}</span>
            )}
            </p>

            
        </div>
        )}


      {/* 4. Imagem */}
      {page.imagem && (
        <img
          src={page.imagem}
          alt={page.titulo}
          className="w-full max-w-4xl mx-auto rounded-lg shadow mb-4 object-cover"
        />
      )}

      <div className="flex items-center justify-end mb-16 ">
            
            <button
            onClick={() => {
                if (navigator.share) {
                navigator.share({
                    title: page.titulo,
                    text: page.resumo || "",
                    url: window.location.href,
                });
                } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copiado para a área de transferência!");
                }
            }}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition cursor-pointer"
            >
            <FiShare2 size={18} />
            Partilhar
            </button>
        </div>

      {/* 5. Conteúdo */}
      <div className="prose prose-zinc lg:prose-lg max-w-none">
        {page.conteudo.map((sec, i) => {
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

            case "acordeao":
            return (
                <div key={i} className="my-6 border rounded-lg divide-y">
                <details className="p-4">
                    <summary className="cursor-pointer font-semibold text-zinc-800">
                    {sec.titulo}
                    </summary>
                    <div className="mt-3 space-y-3">
                    {sec.conteudo?.map((item, j) => {
                        switch (item.tipo) {
                        case "paragrafo":
                            return (
                            <p key={j} className="text-zinc-700 leading-relaxed">
                                {item.texto}
                            </p>
                            );
                        case "lista":
                            return (
                            <ul
                                key={j}
                                className="list-disc pl-6 space-y-2 text-zinc-700"
                            >
                                {item.itens.map((li, k) => (
                                <li key={k}>{li}</li>
                                ))}
                            </ul>
                            );
                        case "subtitulo":
                            return (
                            <h3
                                key={j}
                                className="text-lg font-semibold text-zinc-900 mt-4 mb-2"
                            >
                                {item.texto}
                            </h3>
                            );
                        default:
                            return null;
                        }
                    })}
                    </div>
                </details>
                </div>
            );

            case "testeConhecimento":
            // eslint-disable-next-line
            const isShown = quizAnswers[i] || false;

            return (
                <div key={i} className="my-6 border rounded-lg p-4 bg-emerald-50">
                <h2 className="text-lg font-bold text-zinc-800 mb-3">
                    {sec.titulo || "Teste de conhecimento"}
                </h2>

                {/* Pergunta */}
                <p className="text-zinc-800 font-medium mb-3">{sec.pergunta}</p>

                {/* Botão para revelar */}
                {!isShown ? (
                    <Button
                    onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [i]: true }))
                    }
                    
                    >
                    Mostrar resposta
                    </Button>
                ) : (
                    <p className="mt-3 text-green-700 font-semibold">{sec.resposta}</p>
                )}
                </div>
            );





            case "contacto":
              return (
                <div key={i} className="mt-8">
                  <p className="text-zinc-700">
                    Fale com a sua médica ou enfermeira de família, ou contacte
                    diretamente:
                  </p>
                  <a
                    href={`tel:${sec.telefone}`}
                    aria-label="Ligar para o Centro de Saúde"
                  >
                    <Button className="mt-4 inline-flex items-center gap-2">
                      <FiPhoneCall size={20} />
                      <span>
                        <span>{sec.rotulo}</span>
                      </span>
                    </Button>
                  </a>
                </div>
              );

            case "alerta":
            return (
                <div
                key={i}
                className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl shadow-sm"
                >
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="text-zinc-600 mr-2" size={24} />
                    <h2 className="text-lg font-bold text-zinc-700">{sec.titulo}</h2>
                </div>
                <p className="text-sm text-zinc-800 mb-4 leading-relaxed">{sec.texto}</p>

                {sec.nota && (
                    <p className="text-sm text-gray-700 bg-white border-l-4 border-emerald-400 p-3 rounded mb-4">
                    {sec.nota}
                    </p>
                )}

                <a
                    href={`tel:${sec.telefone}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    aria-label="Ligar SNS 24"
                >
                    <FiPhoneCall size={18} />
                    {sec.rotulo}
                </a>
                </div>
            );

            case "navegacao":
            return (
                <div key={i} className="mt-12 flex justify-between">
                {sec.previous && (
                    <a href={sec.previous.to}>
                    <Button className="bg-gray-200 text-zinc-800 hover:bg-gray-300 transition">
                        ← {sec.previous.label}
                    </Button>
                    </a>
                )}
                {sec.next && (
                    <a href={sec.next.to} className="ml-auto">
                    <Button >
                        {sec.next.label} →
                    </Button>
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

       <hr className="mt-24" />
      
       <RecursosPensadosParaSi tipo={page.tipo} />


    </div>
  );
}
