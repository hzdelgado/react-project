import { Box } from "@mui/material";
import FoodBackground from "../../../../assets/food/food5.jpeg";

export function Background() {
  return (
    <Box
      sx={{
        height: "40%", // muestra solo la mitad horizontal
        overflow: "hidden", // oculta lo que se sale del contenedor
      }}
    >
      <Box
        component="img"
        src={FoodBackground}
        alt="food plate"
        sx={{ borderRadius: 2, width: "100%" }}
      />
    </Box>
  );
}
