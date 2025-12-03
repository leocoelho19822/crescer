// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Ícones
import { FiPhoneCall, FiShare2, FiMail, FiMapPin } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

// Componentes e Redux
import Button from "../components/Button";
import RecursosPensadosParaSi from "./RecursosPensadosParaSi";
import ConfirmOverlay from "./ConfirmOverlay";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "../store/api";
import { setAuthState } from "../store/authSlice";

export default function MontaPage() {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});

  const [favorito, setFavorito] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);

  const dispatch = useDispatch();
  const { data: user } = useGetProfileQuery();
  const isAuthenticated = Boolean(user);

  // -------------------------
  // 1. Carregar página
  // -------------------------
  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("/data/pages.json")
      .then((res) => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.json();
      })
      .then(async (data) => {
        const foundPage = data.pages.find((p) => p.id === id);

        if (!foundPage) {
          setError(true);
          setLoading(false);
          return;
        }

        setPage(foundPage);

        // -------------------------
        // 2. Verificar favoritos
        // -------------------------
        if (foundPage.icones?.favorito && user?.id) {
          try {
            const favRes = await fetch("https://api.projetocrescer.pt/api/users/favorites", {
              method: "GET",
              credentials: "include",
            });

            const favData = await favRes.json();

            if (Array.isArray(favData)) {
              const exists = favData.some((fav) => fav.articleId === id);
              setFavorito(exists);
            }
          } catch (err) {
            console.error("Erro ao buscar favoritos:", err);
          }
        }

        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id, user]);

  // -------------------------
  // 3. Alternar favorito
  // -------------------------
  const toggleFavorito = async () => {
    if (!isAuthenticated) {
      setShowLoginOverlay(true);
      return;
    }

    try {
      const res = await fetch("https://api.projetocrescer.pt/api/users/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ articleId: id }),
      });

      const data = await res.json();

      if (res.ok) {
        const added = data.message?.toLowerCase().includes("adicionado");
        setFavorito(added);

        dispatch(
          setAuthState({
            user: { ...user, favorites: data.favorites || [] },
            isAuthenticated: true,
          })
        );
      }
    } catch (err) {
      console.error("Erro ao favoritar:", err);
    }
  };

  // -------------------------
  // Estado de carregamento
  // -------------------------
  if (loading) return <p className="text-center mt-24">A carregar...</p>;

  if (error || !page) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 mt-24 text-center">
        <h1 className="text-3xl font-bold text-zinc-800 mb-4">Página não encontrada</h1>
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

  // -------------------------
  // RENDERIZAÇÃO PRINCIPAL
  // -------------------------
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">

      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
        {page.titulo}
      </h1>

      {/* Resumo */}
      {page.resumo && (
        <p className="text-lg italic text-zinc-600 mb-6">{page.resumo}</p>
      )}

      {/* Autor / Revisor */}
            <div className="mb-4 text-sm text-gray-500 space-y-1">
            
              <div className="flex justify-between">
                <p>{page.autor}</p>
                <p>
                  Revisão:{" "}
                  {new Date(page.data).toLocaleDateString("pt-PT")}
                </p>
              </div>
            </div>
      
            <div className="flex items-center justify-end space-x-6 mb-2 ">
                  
      
                  {/* Favoritar */}
                  {page.icones?.favorito && (
                    <button
                      onClick={toggleFavorito}
                      className="flex items-center text-gray-500 gap-2 text-sm transition cursor-pointer"
                    >
                      {favorito ? (
                        <AiFillHeart size={25} className="text-verde-100" />
                      ) : (
                        <FiHeart size={25} className="text-gray-500 hover:text-" />
                      )}
                      
                    </button>
                  )}
                  {/* Partilhar */}
                  {page.icones?.partilha && (
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
                      <FiShare2 size={25} />
                      
                    </button>
                  )}
                </div>



      {/* Imagem */}
      {page.imagem && (
        <img
          src={page.imagem}
          alt={page.titulo}
          className="w-full max-w-4xl mx-auto rounded-lg shadow mb-8 object-cover"
        />
      )}

      {/* Conteúdo */}
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
                <h2 key={i} className="text-xl font-semibold text-zinc-900 mt-8 mb-3">
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

                          case "imagem":
                            return (
                              <div key={j} className="my-2 flex justify-start">
                                <img
                                  src={item.src}
                                  alt={item.alt || "Imagem"}
                                  className="max-h-24 object-contain"
                                />
                              </div>
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
                              <h3 key={j} className="text-lg font-semibold text-zinc-900 mt-4 mb-2">
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

            case "testeConhecimento":{
              const isShown = quizAnswers[i] || false;

              return (
                <div key={i} className="my-6 border rounded-lg p-4 bg-emerald-50">
                  <h2 className="text-lg font-bold text-zinc-800 mb-3">
                    {sec.titulo || "Teste de conhecimento"}
                  </h2>

                  <p className="text-zinc-800 font-medium mb-3">{sec.pergunta}</p>

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
            }

            case "email":
              return (
                <div key={i} className="flex items-center gap-3 my-3">
                  <FiMail className="text-blue-600 w-5 h-5" />
                  <a href={`mailto:${sec.endereco}`} className="text-blue-600 hover:underline">
                    {sec.rotulo}
                  </a>
                </div>
              );

            case "localizacao":
              return (
                <div key={i} className="my-6">
                  <div className="flex items-center gap-3 mb-2">
                    <FiMapPin className="text-red-600 w-5 h-5" />
                    <span className="font-semibold text-gray-800">Localização</span>
                  </div>
                  <p className="text-gray-700 mb-3">{sec.morada}</p>
                  <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                    <iframe
                      src={sec.mapa}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              );

            case "contacto":
              return (
                <div key={i} className="mt-8">
                  <p className="text-zinc-700">
                    Fale com a sua médica ou enfermeira de família, ou contacte diretamente:
                  </p>
                  <a href={`tel:${sec.telefone}`} aria-label="Ligar">
                    <Button className="mt-4 inline-flex items-center gap-2">
                      <FiPhoneCall size={20} />
                      {sec.rotulo}
                    </Button>
                  </a>
                </div>
              );

            case "alerta":
              return (
                <div
                  key={i}
                  className="mt-10 p-6 bg-orange-50 border border-zinc-800 rounded-xl shadow-sm"
                >
                  <h2 className="text-lg font-bold text-zinc-700 mb-4">
                    {sec.titulo}
                  </h2>

                  <p className="text-sm text-zinc-800 mb-4 leading-relaxed">{sec.texto}</p>

                  <a
                    href={`tel:${sec.telefone}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-verde-100 text-white rounded-xl shadow hover:bg-verde-80 transition"
                  >
                    <FiPhoneCall size={18} />
                    {sec.rotulo}
                  </a>

                  {sec.nota && (
                    <p className="text-sm text-gray-700 bg-white border-l-4 border-orange-40 p-3 mt-5 rounded">
                      {sec.nota}
                    </p>
                  )}
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
                      <Button>{sec.next.label} →</Button>
                    </a>
                  )}
                </div>
              );

            case "imagem":
              return (
                <div key={i} className="my-4 flex justify-center">
                  <img
                    src={sec.conteudo.src}
                    alt={sec.alt || "Imagem"}
                    className="max-h-24 object-contain"
                  />
                </div>
              );

            case "fontes":
              return (
                <div key={i} className="mt-12">
                  <h2 className="text-lg font-bold text-zinc-800 mb-4">
                    Fontes
                  </h2>

                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    {sec.itens.map((fonte, j) => (
                      <li key={j}>
                        <a
                          href={fonte.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-azul-60 hover:underline"
                        >
                          {fonte.texto}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {page.icones?.partilha && <hr className="mt-14" />}

                  <RecursosPensadosParaSi tipo={page.tipo} />
                </div>
              );

            case "citacao":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-zinc-300 pl-4 italic text-xl md:text-2xl text-zinc-700 my-10"
                >
                  “{sec.texto}”
                  {sec.autor && (
                    <footer className="mt-2 text-right text-base font-semibold text-zinc-600">
                      — {sec.autor}
                    </footer>
                  )}
                </blockquote>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Overlay de login */}
      {showLoginOverlay && (
        <ConfirmOverlay
          mensagem="Precisa iniciar sessão para adicionar aos favoritos."
          tipo="alert"
          onCancel={() => setShowLoginOverlay(false)}
        />
      )}

    </div>
  );
}
