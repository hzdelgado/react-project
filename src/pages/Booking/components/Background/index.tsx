import { Box } from "@mui/material";
import FoodBackground from "../../../../assets/food/food5.jpeg";
import { Header } from "../Header";

type BackgroundProps = {
  title?: string;
}

export function Background({ title }: Readonly<BackgroundProps>) {
  return (
    <Box
      component="section"
      sx={{
        height: "40%",
        overflow: "hidden",
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src={FoodBackground}
        alt="Plato de comida mediterránea"
        sx={{ width: "100%" }}
      />
      {title && <Header title={title}/>}
    </Box>
  );
}
