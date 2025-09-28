// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState([]);
  const [visiveis, setVisiveis] = useState(6);

  useEffect(() => {
    carregarFavoritos();
  }, []);

  const carregarFavoritos = () => {
    const stored = localStorage.getItem("favoritos");
    const slugs = stored ? JSON.parse(stored) : [];

    fetch("/data/artigos.json") // usa novo ficheiro
      .then((res) => res.json())
      .then((data) => {
        const allArtigos = data.artigos;
        const favs = allArtigos.filter((artigo) =>
          slugs.includes(artigo.slug)
        );
        setFavoritos(favs);
      });
  };

  const removerFavorito = (slug) => {
    const stored = localStorage.getItem("favoritos");
    let slugs = stored ? JSON.parse(stored) : [];
    slugs = slugs.filter((favSlug) => favSlug !== slug);
    localStorage.setItem("favoritos", JSON.stringify(slugs));
    setFavoritos((prev) => prev.filter((artigo) => artigo.slug !== slug));
  };

  const handleVerMais = () => {
    setVisiveis((prev) => prev + 6);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
        Meus Favoritos
      </h1>
      <p className="text-gray-600 mb-8">
        Nesta secção são apresentados os artigos guardados como favoritos, constituindo um espaço dedicado à revisão de conteúdos considerados relevantes e ao rápido acesso àqueles que despertaram maior interesse.
      </p>

      {favoritos.length === 0 ? (
        <p className="text-gray-600">Ainda não tens artigos guardados.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritos.slice(0, visiveis).map((artigo) => (
              <div
                key={artigo.slug}
                className="rounded-2xl shadow-md border border-gray-200 bg-white flex flex-col overflow-hidden hover:shadow-lg transition"
              >
                {artigo.imagem && (
                  <img
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    className="w-full h-50 object-cover"
                  />
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-3 text-zinc-800">
                    {artigo.titulo}
                  </h4>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-3">
                    {artigo.resumo}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <Link
                      to={`/artigo/${artigo.slug}`} // rota usa slug
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Ler mais →
                    </Link>
                    <button
                      onClick={() => removerFavorito(artigo.slug)}
                      className="text-red-500 hover:underline"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visiveis < favoritos.length && (
            <div className="flex justify-center mt-10">
              <Button onClick={handleVerMais}>Ver mais</Button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
