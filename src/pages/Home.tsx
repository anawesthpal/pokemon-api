import { useEffect } from "react";
import AppBarStyled from "../components/AppBarStyled";
import BotaoPaginacao from "../components/BotaoPaginacao";
import ListarPokemons from "../components/ListarPokemons";
import { useAppDispatch } from "../store/hooks";
import { listarPokemons } from "../store/modules/pokemons/actions";

function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listarPokemons(0))
    }, [])


    return (
        <>
            <AppBarStyled />
            <ListarPokemons />
            <BotaoPaginacao />
        </>
    )
    
}

export default Home