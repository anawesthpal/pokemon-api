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
            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                elevation={5}
              >
                <CardMedia
                  sx={{
                    height: 200,
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
              {/* 
                <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", height:400 ,backgroundPosition:"center", backgroundSize: "contain", }}
                  image={item.imagemURL}
                  title="green iguana"
      />
    </Card>
              */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ListarPokemons;
