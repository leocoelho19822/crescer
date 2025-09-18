// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import artigosData from "../../public/data/artigos.json";
import Button from "../components/Button";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [resultados, setResultados] = useState([]);
  const [visiveis, setVisiveis] = useState(6);

  useEffect(() => {
    if (query) {
      const termo = query.toLowerCase();
      const filtrados = artigosData.artigos.filter(
        (art) =>
          art.titulo.toLowerCase().includes(termo) ||
          art.resumo.toLowerCase().includes(termo) ||
          art.categoria.toLowerCase().includes(termo) ||
          art.tipo.toLowerCase().includes(termo)
      );
      setResultados(filtrados);
      setVisiveis(6); // reset sempre que muda pesquisa
    } else {
      setResultados([]);
    }
  }, [query]);

  const handleVerMais = () => {
    setVisiveis((prev) => prev + 6);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
        Resultados da pesquisa por:{" "}
        <span className="text-emerald-600">{query}</span>
      </h1>

      {resultados.length === 0 ? (
        <p className="text-gray-600">Nenhum artigo encontrado.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resultados.slice(0, visiveis).map((artigo) => (
                    <div
                      key={artigo.id}
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
                        <h4 className="text-xl font-bold mb-3 text-zinc-800">{artigo.titulo}</h4>
                        <p className="text-sm text-gray-700 flex-grow line-clamp-3">{artigo.resumo}</p>
                        <div className="flex justify-end mt-4">
                          <Link
                            to={`/artigo/${artigo.id}`}
                            className="text-sm text-blue-600 hover:underline font-medium"
                          >
                            Ler mais →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

          {visiveis < resultados.length && (
            <div className="flex justify-center mt-10">
              <Button
                onClick={handleVerMais}
                
              >
                Ver mais
              </Button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
