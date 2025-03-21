import { Link } from "react-router-dom";
import { BarraNavegacao, BarraNavegacaoLi, BarraNavegacaoUl, LinkStyled } from "../pages/style";

export const Menu = () => {
  return (
    <BarraNavegacao>
      <BarraNavegacaoUl>
        <BarraNavegacaoLi>
          <LinkStyled to={"/"}>Home</LinkStyled>
        </BarraNavegacaoLi>

        <BarraNavegacaoLi>
          <LinkStyled to={"/mmorpg"}>MMORPG</LinkStyled>
        </BarraNavegacaoLi>

        <BarraNavegacaoLi>
          <LinkStyled to={"/fps"}>FPS</LinkStyled>
        </BarraNavegacaoLi>

        <BarraNavegacaoLi>
          <LinkStyled to={"/moba"}>MOBA</LinkStyled>
        </BarraNavegacaoLi>

        <BarraNavegacaoLi>
          <LinkStyled to={"/page404"}>Page404</LinkStyled>
        </BarraNavegacaoLi>
      </BarraNavegacaoUl>
    </BarraNavegacao>
  );
};
