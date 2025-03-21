import { Card, CardImg, CardTitle, ContainerCards, TitleCategorias } from "./style";

export const Home = () => {
  return (
    <>
        <TitleCategorias>Categorias</TitleCategorias>
      <ContainerCards>
        <Card>
          <CardTitle>MMORPG</CardTitle>
          <CardImg src="https://images5.alphacoders.com/640/640377.jpg" />
        </Card>

        <Card>
          <CardTitle>FPS</CardTitle>
          <CardImg src="https://cdn.wallpapersafari.com/9/23/7Fl16w.jpg" />
        </Card>
        
        <Card>
          <CardTitle>MOBA</CardTitle>
          <CardImg src="https://images.hdqwalls.com/wallpapers/2019-genesis-moba-n0.jpg" />
        </Card>
      </ContainerCards>
    </>
  );
};
