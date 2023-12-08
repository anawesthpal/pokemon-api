import { Box } from "@mui/material";
import { useEffect } from "react";
import AppBarStyled from "../components/AppBarStyled";
import BotaoPaginacao from "../components/BotaoPaginacao";
import FloatButton from "../components/FloatButton";
import ListarPokemons from "../components/ListarPokemons";
import { useAppDispatch } from "../store/hooks";
import { listarPokemons } from "../store/modules/pokemons/actions";

function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listarPokemons(0))
    }, []);

    return (
      <>
        <Box component="main" height="100%" width="100%" bgcolor="#d5d5d5">
          <AppBarStyled />
          <ListarPokemons />
          <BotaoPaginacao />
          <FloatButton />
          {/* <Modal open={open} handleClose={handleModal} /> */}
        </Box>
      </>
    );
    
}

export default Home