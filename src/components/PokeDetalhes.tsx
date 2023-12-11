import { } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import { useAppSelector } from "../store/hooks";

export function PokemonDetalhes() {
  const pokemon = useAppSelector((state) => state.pokemon);

  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={3}>
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
                title="pokemon"
              />
              <CardContent>
                <Typography gutterBottom variant="h4">
                  {item.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {item.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Altura: {item.altura}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Largura: {item.largura}
                </Typography>
              </CardContent>
              <CardActions>//button</CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
