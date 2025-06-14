import { Typography, Box, Button, Stack } from "@mui/material";
import { styles } from "../../Home.styles";
import MainImage from "../../../../assets/food/food1.png";
import { PageSection } from "../../../../components/PageSection";
import { useNavigate } from "react-router-dom";
export function Hero() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/booking');
  }
  return (
   <Stack
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
      sx={{ width: '100%', alignItems: { xs: "center", md: "flex-start" } }}
    >
      <Box display="flex" flexDirection="column" gap={2} textAlign={{ xs: 'center', md: 'left',  }} sx={{paddingX: 1}}>
        <Typography variant="h3" gutterBottom sx={styles.heading}>
          Bienvenido a Little Lemon
        </Typography>
        <Typography variant="body1" sx={styles.heading}>
          Disfruta nuestra deliciosa comida mediterránea.
        </Typography>
        <Button color="secondary" variant="contained" onClick={handleNavigate}>
          Reservar
        </Button>
      </Box>
    </Stack>

    <Stack
      flex="1 1 0"
      sx={{ justifyContent: "center", alignItems: "center", mt: { xs: 4, md: 0 } }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          component="img"
          src={MainImage}
          alt="Little Lemon Logo"
          sx={{
            width: { xs: '100%', md: 'auto' },
            maxHeight: { xs: 250, md: 400 },
            height: 'auto',
            borderRadius: 2,
            transform: { xs: 'rotate(0deg)', md: 'rotate(90deg)' },
          }}
        />
      </Box>
    </Stack>
  </PageSection>
</Stack>

  );
}
