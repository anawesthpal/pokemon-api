import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { Habilidade } from "../store/modules/pokemons/pokemonsDetalhesSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Modal {
  id: number;
  nome: string;
  tamanho: number;
  habilidades: Habilidade[];
}

interface ModalDetalhesProps {
  aberto: boolean;
  actionCancel: () => void
  pokemon: Modal
}

const ModalDetalhes: React.FC<ModalDetalhesProps> = ({ pokemon, actionCancel, aberto }) => {

  return (
    <>
      <Modal
        onClose={actionCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={aberto}
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={actionCancel}
            sx={{
              position: "absolute",
              right: 28,
              top: 28,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Card
            style={{
              display: "flex",
              width: "580px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              alt={pokemon.nome}
              height="350"
              width="480"
              // image={pokemon.sprites.front_default}
            />
            <CardContent
              style={{
                display: "flex",
                width: "180px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  width: "480px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingRight: "50px",
                }}
              >
                <Typography
                  variant="body1"
                  width={"100px"}
                  color="primary.main"
                >
                  {pokemon.nome}
                </Typography>
                <Typography
                  variant="body1"
                  width={"100px"}
                  color="text.secondary"
                >
                  ID: {pokemon.id}
                </Typography>
                <Typography variant="body1" color="secondary.contrastText">
                  Height: {pokemon.tamanho}
                </Typography>
                <Grid
                  item
                  key={pokemon.id}
                  width={"200px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <strong>
                    Abilities :
                    {pokemon.habilidades.map((p) => (
                      <Typography>{p.habilidades}</Typography>
                    ))}
                  </strong>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
  

export default ModalDetalhes;
