import axios from "axios";
import { useEffect, useState } from "react";
import { TitleMOBA, ContainerCards, Card, CardImg, CardTitle, Title } from "./style"; // Certifique-se de importar os componentes

export const MOBA = () => {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  async function buscar_jogos() {
    try {
      const { data } = await axios.get(
        "https://firestore.googleapis.com/v1/projects/projeto1-infinity/databases/(default)/documents/moba"
      );

      // Mapeando a resposta do Firestore com verificação de campos
      const jogosExtraidos = data.documents.map((doc) => {
        const fields = doc.fields || {};
        return {
          id: fields.id?.stringValue || "Sem ID",
          foto: fields.foto?.stringValue || "URL da imagem não disponível",
          titulo: fields.titulo?.stringValue || "Título indisponível",
          subtitulo: fields.subtitulo?.stringValue || "Subtítulo indisponível",
          descricao: fields.descricao?.stringValue || "Descrição indisponível",
          lançamento: fields.lançamento?.stringValue || "Data de lançamento indisponível",
        };
      });

      setJogos(jogosExtraidos);
      setLoading(false); // Define como carregamento concluído
    } catch (error) {
      console.error("Erro ao buscar jogos:", error.response ? error.response.data : error.message);
      setLoading(false); // Define como carregamento concluído
    }
  }

  useEffect(() => {
    buscar_jogos(); // Chama a função para buscar os jogos
  }, []);

  // Fallback de imagem para evitar quebrar o layout em caso de URL inválida
  const fallbackImage = "URL_da_imagem_de_fallback.png"; // Imagem de fallback caso o valor da URL da imagem seja inválida

  return (
    <>
      <Title>MOBA</Title> {/* Título estilizado para a página MOBA */}
      {loading ? (
        <p>Carregando...</p>
      ) : jogos.length > 0 ? (
        <ContainerCards>
          {jogos.map((jogo) => (
            <Card key={jogo.id}>
              <CardTitle>{jogo.titulo}</CardTitle>
              <CardImg
                src={jogo.foto || fallbackImage} // Usa a URL da foto ou a imagem de fallback
                alt={jogo.titulo}
              />
            </Card>
          ))}
        </ContainerCards>
      ) : (
        <p>Nenhum jogo encontrado.</p>
      )}
    </>
  );
};
