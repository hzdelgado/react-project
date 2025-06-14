import { Box, Button, Stack, Typography } from "@mui/material";
import FoodTwo from "../../../../assets/food/food2.jpeg";
import FoodThree from "../../../../assets/food/food3.jpeg";
import FoodFour from "../../../../assets/food/food4.webp";

export function FoodSlider() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      sx={{ width: "100%", marginBottom: 3 }}
    >
      <Stack
        sx={{
          width: { xs: "100%", md: "600px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4" color="text.primary" gutterBottom>
          Nuestros especiales de esta semana
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
        >
          Menú online
        </Button>
      </Stack>

      <Stack
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Box
          component="img"
          src={FoodTwo}
          alt="food plate"
          sx={{
            borderRadius: 2,
            maxWidth: 300,
            width: "100%",
          }}
        />
        <Box
          component="img"
          src={FoodThree}
          alt="food plate"
          sx={{
            borderRadius: 2,
            maxWidth: 300,
            width: "100%",
          }}
        />
        <Box
          component="img"
          src={FoodFour}
          alt="food plate"
          sx={{
            borderRadius: 2,
            maxWidth: 300,
            width: "100%",
          }}
        />
      </Stack>
    </Stack>
  );
}
