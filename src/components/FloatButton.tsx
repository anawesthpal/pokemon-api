import { ImageList, ImageListItem } from "@mui/material";

const style = {
  height: 75,
  width: 100,
  //marginLeft: 10,
  display: { xs: "flex", sm: "flex" },
};


function FloatButton() {
  return (
    <ImageList>
      <ImageListItem component="form" sx={style}>
        <img src="src\assets\pokedexKanto.webp" alt="" />
      </ImageListItem>
    </ImageList>
  );
}

export default FloatButton;
