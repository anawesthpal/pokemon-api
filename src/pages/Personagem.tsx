import AppBarStyled from "../components/AppBarStyled";
import { PokemonDetalhes } from "../components/PokemonDetalhes";

function Personagem() {
  return (
    <>
      <AppBarStyled />
      <PokemonDetalhes />
      <BotaoHome />
    </>
  );
}

export default Personagem;
