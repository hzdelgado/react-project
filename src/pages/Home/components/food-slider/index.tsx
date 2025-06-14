import { Box, Button, Stack, Typography } from "@mui/material";
import FoodTwo from "../../../../assets/food/food2.jpeg";
import FoodThree from "../../../../assets/food/food3.jpeg";
import FoodFour from "../../../../assets/food/food4.webp";

export function FoodSlider() {
  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      maxWidth={"100%"}
      gap={4}
    >
      <Stack width="600px">
        <Typography variant="h3" color="text.primary">
          Nuestro Especiales de esta semana
        </Typography>
        <Button color="secondary" variant="contained" size="small">
          Menú online
        </Button>
      </Stack>
      <Stack display="flex" flexDirection="row" gap={3}>
        <Box
          component="img"
          src={FoodTwo}
          alt="food plate"
          sx={{ borderRadius: 2, maxWidth: "400px" }}
        />
        <Box
          component="img"
          src={FoodThree}
          alt="food plate"
          sx={{ borderRadius: 2, maxWidth: "400px" }}
        />
        <Box
          component="img"
          src={FoodFour}
          alt="food plate"
          sx={{ borderRadius: 2, maxWidth: "400px" }}
        />
      </Stack>
    </Stack>
  );
}
