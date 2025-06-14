import { Box, Button, Stack, Typography } from "@mui/material";
import FoodTwo from "../../../../assets/food/food2.jpeg";
import FoodThree from "../../../../assets/food/food3.jpeg";
import FoodFour from "../../../../assets/food/food4.webp";

export function FoodSlider() {
  return (
    <Stack
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      sx={{ width: "100%", marginBottom: 3 }}
    >
      <Stack
        component="header"
        sx={{
          width: { xs: "100%", md: "600px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4" color="text.primary" component="h2" gutterBottom>
          Nuestros especiales de esta semana
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          sx={{ alignSelf: { xs: "center", md: "flex-start" } }}
        >
          Menú online
        </Button>
      </Stack>

      <Stack
        component="ul"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        {[FoodTwo, FoodThree, FoodFour].map((src, index) => (
          <Box
            component="li"
            key={index}
            sx={{ maxWidth: 300, width: "100%" }}
          >
            <Box
              component="img"
              src={src}
              alt={`Plato especial ${index + 1}`}
              sx={{
                borderRadius: 2,
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
