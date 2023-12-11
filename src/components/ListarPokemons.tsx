/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  VisibilityRounded
} from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listarPorId } from "../store/modules/pokemon/actions";
import { PokemonSumario } from "../store/modules/pokemons/pokemonsDetalhesSlice";

function ListarPokemons() {
  
  const dispatch = useAppDispatch();
  const navigate =useNavigate();

  function handleFavorite(id: number) {
  dispatch(listarPorId(id));
  }

  // function handleDatails(id: number) {
  // dispatch(`/personagem/${id}`);
  // }

  const pokemons = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    if (pokemons.length) {
      console.log(pokemons);
    }
  }, [pokemons]);

  
  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokemons.map((item: PokemonSumario) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                }}
                elevation={5}
              >
                <CardMedia
                  sx={{
                    height: 150,
                    width: "85%",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    marginTop: 3,
                    marginLeft: 2.2,
                  }}
                  image={item.imagemURL}
                  title={item.nome}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID - {item.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Altura - {item.altura}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Largura - {item.largura}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experiência - {item.baseXP}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="Favorite"
                    onClick={() => handleFavorite(item.id)}
                  >
                    {item.favorito ? (
                      <FavoriteRounded color="error" />
                    ) : (
                      <FavoriteBorderRounded color="error" />
                    )}
                  </IconButton>

                  <IconButton
                    aria-label="eyes"
                    onClick={() => handleFavorite(item.id)}
                  >
                    {item.favorito ? (
                      <VisibilityRounded color="disabled" />
                    ) : (
                      <VisibilityRounded color="disabled" />
                    )}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ListarPokemons;
