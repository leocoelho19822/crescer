// eslint-disable-next-line
import React from "react";
import { useParams } from "react-router-dom";
import { useGetArticleByIdQuery } from "../store/api"; 

export default function MontaArtigo() {
  const { id } = useParams(); // obtém o ID da rota
  const { data: artigo, isLoading, error } = useGetArticleByIdQuery(id);

  if (isLoading) return <p>A carregar artigo...</p>;
  if (error) return <p>Erro ao carregar o artigo.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-4">{artigo.title}</h1>
      <p className="text-gray-600 italic mb-6">{artigo.summary}</p>
      {artigo.imageUrl && (
        <img
          src={artigo.imageUrl}
          alt={artigo.title}
          className="w-full h-auto mb-6 rounded shadow"
        />
      )}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: artigo.content.replace(/\n/g, "<br />") }} />
    </div>
  );
}
