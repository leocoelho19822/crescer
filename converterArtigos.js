// converterArtigos.js
import fs from "fs";
import path from "path";

// Caminhos
const inputPath = path.join("public", "data", "artigos.json");
const outputPath = path.join("public", "data", "artigos_enterprise.json");

// Lê ficheiro
const raw = fs.readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

// Calcula tempo de leitura
function calcularReadingTime(conteudo) {
  const texto = conteudo
    .map((c) => (c.texto ? c.texto : ""))
    .join(" ");
  const totalPalavras = texto.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(totalPalavras / 200));
}

// Converte artigos
const artigosConvertidos = data.artigos.map((artigo, idx) => {
  return {
    id: idx + 1, // id numérico para BD
    slug: artigo.id, // mantém o id antigo como link/slug
    titulo: artigo.titulo,
    resumo: artigo.resumo,
    categoria: artigo.categoria,
    tipo: artigo.tipo,
    imagem: artigo.imagem,
    autorId: artigo.autor_id,
    revisorId: artigo.revisor_id,
    status: artigo.status || "publicado",
    published_at: artigo.updated_at || artigo.created_at,
    created_at: artigo.created_at,
    updated_at: artigo.updated_at,
    tags: artigo.tags || [artigo.tipo, artigo.categoria.toLowerCase()],
    lang: artigo.lang || "pt-PT",
    icones: artigo.icones || { favorito: false, partilha: false },
    reading_time: calcularReadingTime(artigo.conteudo),
    conteudo: artigo.conteudo,
    related: artigo.related || [],
    link: `/artigos/${artigo.id}` // URL amigável
  };
});

// Salva no novo formato
fs.writeFileSync(
  outputPath,
  JSON.stringify({ artigos: artigosConvertidos }, null, 2),
  "utf-8"
);

console.log(`✅ Conversão concluída. Ficheiro gerado: ${outputPath}`);
