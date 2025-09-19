// converterArtigos.js
import fs from "fs";
import path from "path";

// Caminho absoluto para o ficheiro JSON
const inputPath = path.join("public", "data", "artigos.json");
const outputPath = path.join("public", "data", "artigos_enterprise.json");

// Lê o ficheiro original
const raw = fs.readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

// Função para gerar timestamps simulados
function getTimestamps(baseDate) {
  const created = new Date(baseDate);
  const updated = new Date(created);
  updated.setDate(updated.getDate() + 1);
  return {
    created_at: created.toISOString(),
    updated_at: updated.toISOString(),
  };
}

// Converte cada artigo para o modelo empresarial
const artigosConvertidos = data.artigos.map((artigo) => {
  const { created_at, updated_at } = getTimestamps(artigo.data);

  return {
    id: artigo.id,
    titulo: artigo.titulo,
    resumo: artigo.resumo,
    categoria: artigo.categoria,
    tags: [artigo.tipo, artigo.categoria.toLowerCase()],
    tipo: artigo.tipo,
    imagem: artigo.imagem,
    autor_id: 5,      // por exemplo: Equipa Cres(Ser)
    revisor_id: 2,    // ex.: Profissional genérico (João Silva)
    status: "publicado",
    lang: "pt-PT",
    icones: artigo.icones,
    conteudo: artigo.conteudo,
    related: [],
    created_at,
    updated_at,
  };
});

// Grava o novo JSON
fs.writeFileSync(
  outputPath,
  JSON.stringify({ artigos: artigosConvertidos }, null, 2),
  "utf-8"
);

console.log(`✅ Conversão concluída. Novo ficheiro: ${outputPath}`);
