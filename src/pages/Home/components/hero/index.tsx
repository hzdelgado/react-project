import { Typography, Box, Button, Stack } from "@mui/material";
import { styles } from "../../Home.styles";
import MainImage from "../../../../assets/food/food1.png";
import { PageSection } from "../../../../components/PageSection";
import { useNavigate } from "react-router-dom";
export function Hero() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/booking");
  };
  return (
    <Stack
      component="section"
      sx={{
        backgroundColor: "primary.main",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "auto", md: "40vh" },
        paddingY: 4,
      }}
    >
      <PageSection>
        <Stack
          flex="1 1 0"
          sx={styles.headline}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={styles.heading}
            component="h1"
          >
            Bienvenido a Little Lemon
          </Typography>
            <Typography variant="body1" sx={styles.heading} component="p">
              Little Lemon es un restaurante mediterráneo de propiedad familiar,
              enfocado en recetas tradicionales servidas con un toque moderno.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleNavigate}
              sx={{ mt: 2 }}
            >
              Reservar
            </Button>
         
        </Stack>

        <Stack
          flex="1 1 0"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={MainImage}
            alt="Plato mediterráneo de Little Lemon"
            sx={styles.mainImage}
          />
        </Stack>
      </PageSection>
    </Stack>
  );
}
