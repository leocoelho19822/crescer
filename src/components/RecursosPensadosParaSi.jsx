// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

// cor padrão dos recursos
const corBg = "#F8FAFC"; // cinza-claro
const corTexto = "text-zinc-800";

// função utilitária para embaralhar (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// eslint-disable-next-line
export default function RecursosPensadosParaSi({ tipo }) {
  const [artigos, setArtigos] = useState([]);
  const [visiveis, setVisiveis] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/artigos.json")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.artigos.filter((a) => a.tipo === tipo);
        const sorteados = shuffleArray(filtrados); // embaralhar
        setArtigos(sorteados);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [tipo]);

  if (loading) return <p className="text-center text-gray-600">A carregar artigos...</p>;
  if (!artigos.length) return <p className="text-center text-gray-600">Nenhum artigo disponível.</p>;

  const visiveisArtigos = artigos.slice(0, visiveis);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 className="text-3xl font-bold text-zinc-800 mb-8">Recursos pensados para si</h2>

      {/* Grid de artigos em cards verticais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiveisArtigos.map((artigo) => (
          <div
            key={artigo.id}
            className="rounded-2xl shadow-md border border-gray-200 bg-white flex flex-col overflow-hidden hover:shadow-lg transition"
            style={{ backgroundColor: corBg }}
          >
            {artigo.imagem && (
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                className="w-full h-50 object-cover"
              />
            )}
            <div className="p-5 flex flex-col flex-grow">
              <h4 className={`text-xl font-bold mb-3 ${corTexto}`}>{artigo.titulo}</h4>
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

      {/* Botões Ver mais / Ver menos */}
      <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
        {visiveis < artigos.length && (
          <Button onClick={() => setVisiveis((prev) => prev + 3)}>Ver mais</Button>
        )}
        {visiveis > 3 && (
          <Button onClick={() => setVisiveis(3)} variant="secondary" className="bg-gray-200 text-zinc-800 hover:bg-gray-300 transition">
            Ver menos
          </Button>
        )}
      </div>
    </div>
  );
}
