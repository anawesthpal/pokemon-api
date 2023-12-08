import { ImageList, ImageListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FloatButton from "./FloatButton";

function AppBarStyled() {
  return (
    <Box
      justifyContent="center"
      textAlign="center"
      sx={{ flexGrow: 1, marginBottom: 5 }}
    >
      <AppBar position="static" sx={{ py: 1.25, backgroundColor: "#1f1f1f" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <ImageList
            sx={{
              width: 250,
              marginLeft: 24,
              marginRight: 30,
              display: { xs: "none", sm: "block" },
            }}
          >
            <ImageListItem>
              <img src="src\assets\pokemon-logo-8.png" alt="" />
            </ImageListItem>
          </ImageList>

          <FloatButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default AppBarStyled;
