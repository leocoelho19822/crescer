// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiType,
  FiFileText,
  FiTag,
  FiImage,
  FiList,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";
import HeaderEdit from "./HeaderEdit";

import JsonView from "react18-json-view";


// eslint-disable-next-line
export default function ArtigoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artigo, setArtigo] = useState({
    titulo: "",
    resumo: "",
    categoria: "",
    tipo: "",
    imagem: "",
    tags: "",
    status: "pendente",
  });

  useEffect(() => {
    if (id) {
      fetch("/data/artigos.json")
        .then((res) => res.json())
        .then((data) => {
          const encontrado = data.artigos.find((a) => a.id === parseInt(id));
          if (encontrado) {
            setArtigo({
              ...encontrado,
              tags: encontrado.tags ? encontrado.tags.join(", ") : "",
            });
          }
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtigo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Salvar artigo:", artigo);
    navigate("/editorial/artigos");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderEdit user={JSON.parse(localStorage.getItem("user"))} />

      <main className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiBookOpen className="text-[#78B19A]" />
          {id ? "Editar Artigo" : "Criar Novo Artigo"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow rounded-xl space-y-6"
        >
          {/* Título */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiType /> Título
            </label>
            <input
              type="text"
              name="titulo"
              value={artigo.titulo}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              required
            />
          </div>

          {/* Resumo */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiFileText /> Resumo
            </label>
            <textarea
              name="resumo"
              value={artigo.resumo}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
            />
          </div>

          {/* Categoria e Tipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiList /> Categoria
              </label>
              <input
                type="text"
                name="categoria"
                value={artigo.categoria}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 font-medium mb-1">
                <FiTag /> Tipo
              </label>
              <select
                name="tipo"
                value={artigo.tipo}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
              >
                <option value="">Selecione</option>
                <option value="gravidez">Gravidez</option>
                <option value="no colo">No Colo</option>
                <option value="para a vida">Para a Vida</option>
              </select>
            </div>
          </div>

          {/* Imagem */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiImage /> Imagem (URL)
            </label>
            <input
              type="text"
              name="imagem"
              value={artigo.imagem}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiTag /> Tags
            </label>
            <input
              type="text"
              name="tags"
              value={artigo.tags}
              onChange={handleChange}
              placeholder="separadas por vírgula"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-1">
              <FiCheckCircle /> Status
            </label>
            <select
              name="status"
              value={artigo.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#78B19A] outline-none"
            >
              <option value="pendente">Pendente</option>
              <option value="publicado">Publicado</option>
              <option value="arquivado">Arquivado</option>
            </select>
          </div>

          <JsonView
  src={artigo.conteudo || []}
  editable
  onEdit={(edit) => setArtigo((prev) => ({ ...prev, conteudo: edit.src }))}
  onAdd={(edit) => setArtigo((prev) => ({ ...prev, conteudo: edit.src }))}
  onDelete={(edit) => setArtigo((prev) => ({ ...prev, conteudo: edit.src }))}
  theme="light"
  collapseStringsAfterLength={50}
/>

          {/* Botão */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#78B19A] hover:bg-[#5e8e79] text-white px-6 py-2 rounded-lg shadow transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
