import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  ContainerJogos,
  LoadingText,
  Title,
} from "./style";

export const MMORPG = () => {
  const [jogos, setJogos] = useState([]);

  async function buscar_jogos() {
    try {
      const { data } = await axios.get(
        "https://firestore.googleapis.com/v1/projects/projeto1-infinity/databases/(default)/documents/mmorpg"
      );

      const jogosExtraidos = data.documents.map((doc) => ({
        id: doc.fields?.id?.stringValue || "Sem ID",
        foto: doc.fields?.foto?.stringValue || "URL da imagem não disponível",
        titulo: doc.fields?.titulo?.stringValue || "Título indisponível",
        subtitulo:
          doc.fields?.subtitulo?.stringValue || "Subtítulo indisponível",
        descricao:
          doc.fields?.descricao?.stringValue || "Descrição indisponível",
        lançamento:
          doc.fields?.lançamento?.stringValue ||
          "Data de lançamento indisponível",
      }));

      setJogos(jogosExtraidos);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    }
  }

  useEffect(() => {
    buscar_jogos();
  }, []);

  return (
    <>
      <Title>MMORPG</Title>
      {jogos.length > 0 ? (
        <ContainerJogos>
          {jogos.map((jogo) => (
            <Card key={jogo.id}>
              <CardTitle>{jogo.titulo}</CardTitle>
              <CardImg src={jogo.foto} alt={jogo.titulo} />
            </Card>
          ))}
        </ContainerJogos>
      ) : (
        <LoadingText>Carregando...</LoadingText>
      )}
    </>
  );
};
