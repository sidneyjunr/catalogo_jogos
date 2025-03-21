import { Link } from "react-router-dom";
import styled from "styled-components";


export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(90deg, #0c2530, #1e3c52); /* Gradiente sutil */
  text-align: center;
  padding: 20px 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  width: fit-content; /* Mantém o título com o tamanho do conteúdo */
  margin: 60px auto 40px auto; /* Garante que o título ficará centralizado e com espaçamento superior */
  transition: all 0.3s ease-in-out;

  /* Efeito de hover */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
`;



export const ContainerJogos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const TitleCategorias = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 60px;
  color: black; /* Cor do texto em branco para garantir contraste */
  text-align: center;
  padding: 20px 40px; /* Espaçamento interno do título */
  margin-bottom: 40px; /* Espaço abaixo do título */
  text-transform: uppercase; /* Deixa as letras em maiúsculas */
  letter-spacing: 2px; /* Adiciona espaçamento entre as letras */
  border-radius: 8px; /* Bordas arredondadas para um visual mais moderno */
`;

export const ContainerCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap; /* Permite que os cards se reorganizem em várias linhas quando necessário */
  max-width: 1000px;
  margin: 40px auto;
`;

// Card individual
export const Card = styled.div`
  background-color: #0c2530;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  width: 250px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

// Título do card
export const CardTitle = styled.h2`
  font-size: 22px;
  color: #a6afb8;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px; /* Adiciona espaçamento entre as letras para um toque moderno */
  margin-bottom: 10px;
`;

// Imagem do card
export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* Garante que a imagem cubra a área do card sem distorcer */
  border-radius: 15px; /* Bordas arredondadas mais suaves */
  transition: transform 0.3s ease; /* Suaviza a animação da imagem */

  ${Card}:hover & {
    transform: scale(1.1); /* Aumenta a imagem quando o card é focado */
  }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
  font-weight: 500;
`;

export const BarraNavegacao = styled.nav`
  background-color: #0c2530;
  padding: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const BarraNavegacaoUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px; /* Espaçamento maior entre os itens */
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BarraNavegacaoLi = styled.li`
  font-size: 18px;
  font-weight: 500;
  transition: transform 0.3s ease, color 0.3s ease;

  & a {
    text-decoration: none;
    color: #a6afb8;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 8px 16px; /* Adiciona um padding agradável para os links */
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.1); /* Efeito de aumentar levemente ao passar o mouse */
  }

  &:hover a {
    color: #f0f1f6; /* Cor mais clara quando passa o mouse */
    background-color: #1c3545; /* Fundo mais claro quando o mouse passa */
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit; /* Herda a cor do link */
  font-size: inherit; /* Herda o tamanho da fonte */
  font-weight: inherit; /* Herda o peso da fonte */
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: #f0f1f6;
    background-color: #1c3545;
  }
`;
