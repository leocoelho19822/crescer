/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPhoneCall, FiAlertTriangle, FiShare2, FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import RecursosPensadosParaSi from "./RecursosPensadosParaSi";
import { setAuthState } from "../store/authSlice";
import ConfirmOverlay from "./ConfirmOverlay";
import { useGetProfileQuery } from "../store/api";

export default function MontaArtigo() {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [favorito, setFavorito] = useState(false);
  const [autorNome, setAutorNome] = useState("");
  const [revisorNome, setRevisorNome] = useState("");
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);


  const dispatch = useDispatch();
  const { data: user, isLoading: userLoading, error: userError } = useGetProfileQuery();
  const isAuthenticated = Boolean(user);


useEffect(() => {
  setLoading(true);
  setError(false);

  fetch("/data/artigos.json")
    .then((res) => {
      if (!res.ok) throw new Error("Artigo não encontrado");
      return res.json();
    })
    .then(async (data) => {
      const foundArtigo = data.artigos.find(
        (a) => a.slug === id && a.status === "publicado"
      );

      if (!foundArtigo) {
        setError(true);
        setLoading(false);
        return;
      }

      setArtigo(foundArtigo);

      // 🔹 Se estiver autenticado, verificar no backend se está nos favoritos
      if (user && user.id) {
        try {
          const favRes = await fetch(
            "https://api.projetocrescer.pt/api/users/favorites",
            {
              method: "GET",
              credentials: "include",
            }
          );

          const favData = await favRes.json();

          if (favRes.ok && Array.isArray(favData)) {
            const exists = favData.some(
              (fav) => fav.articleId === foundArtigo.slug
            );
            setFavorito(exists);
          }
        } catch (error) {
          console.error("Erro ao verificar favoritos:", error);
        }
      } else {
        setFavorito(false);
      }

      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
}, [id, user]);


  

  // 🔹 Adicionar/remover favorito
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
      // Se a mensagem incluir "Adicionado", ativa o coração
      const isAdded = data.message?.toLowerCase().includes("adicionado");
      setFavorito(isAdded);

      // Atualiza Redux
      dispatch(
        setAuthState({
          user: { ...user, favorites: data.favorites || [] },
          isAuthenticated: true,
        })
      );
    } else {
      console.error("Erro ao favoritar:", data.message);
    }
  } catch (error) {
    console.error("Erro de rede ao favoritar:", error);
  }
};



  // 🔹 Estado de carregamento
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

  // 🔹 Renderização principal
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24 text-zinc-800">
      


      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
        {artigo.titulo}
      </h1>

      

      {/* Resumo */}
      {artigo.resumo && (
        <p className="text-lg italic text-zinc-600 mb-6">{artigo.resumo}</p>
      )}

      {/* Autor / Revisor */}
      <div className="mb-4 text-sm text-gray-500 space-y-1">
        <div className="flex justify-between">
          <p>{autorNome && <span>{autorNome}</span>}</p>
          <p>{revisorNome && <span>Revisto por {revisorNome}</span>}</p>
        </div>
        <div className="flex justify-between">
          <p>Categoria: {artigo.categoria}</p>
          <p>
            Revisão:{" "}
            {new Date(artigo.updated_at).toLocaleDateString("pt-PT")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-6 mb-2 ">
            

            {/* Favoritar */}
            {artigo.icones?.favorito && (
              <button
                onClick={toggleFavorito}
                className="flex items-center text-gray-500 gap-2 text-sm transition cursor-pointer"
              >
                {favorito ? (
                  <AiFillHeart size={25} className="text-verde-100" />
                ) : (
                  <FiHeart size={25} className="text-gray-500 hover:text-verde-100" />
                )}
                
              </button>
            )}
            {/* Partilhar */}
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
                <FiShare2 size={25} />
                
              </button>
            )}
          </div>

      {/* Imagem + Ações */}
      {artigo.imagem && (
        <>
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full max-w-4xl mx-auto rounded-lg shadow mb-8 object-cover"
          />

          
        </>
      )}

      {/* Conteúdo do artigo */}
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

            default:
              return null;
          }
        })}

        


        {showLoginOverlay && (
          <ConfirmOverlay
            mensagem="Precisa iniciar sessão para adicionar artigos aos favoritos."
            tipo="alert"
            onCancel={() => setShowLoginOverlay(false)}
          />
        )}

      </div>

      <hr />

      {/* Recursos relacionados */}
      <RecursosPensadosParaSi tipo={artigo.tipo} />
    </div>
  );
}
