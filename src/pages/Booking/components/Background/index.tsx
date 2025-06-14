import { Box } from "@mui/material";
import FoodBackground from "../../../../assets/food/food5.jpeg";

export function Background() {
  return (
    <Box
      sx={{
        height: "40%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={FoodBackground}
        alt="food plate"
        sx={{ width: "100%" }}
      />
    </Box>
  );
}
