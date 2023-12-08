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
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PokemonSumario } from "../store/modules/pokemons/pokemons.slice";

function ListarPokemons() {
  const dispatch = useAppDispatch();
  function handleFavorite(id: number) {
    // dispatch(toggleFavorito({ id }));
  }

  const pokemons = useAppSelector((state) => state.pokemons.pokemons);

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
            <Grid item xs={2} sm={3} md={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 5,
                }}
                elevation={5}
              >
                <CardMedia
                  sx={{
                    height: 150,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    marginTop: 3,
                  }}
                  image={item.imagemURL}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID - {item.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tamanho - {item.tamanho}
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
