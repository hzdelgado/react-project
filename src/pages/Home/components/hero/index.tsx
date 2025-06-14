import { Typography, Box, Button, Stack } from '@mui/material';
import { styles } from '../../Home.styles';
import MainImage from '../../../../assets/food/food1.png';
import { PageSection } from '../../../../components/PageSection';
export function Hero() {
    return(<Stack
  sx={{
    backgroundColor: 'primary.main',
    alignItems: 'center', 
    justifyContent: 'center',
    height: '40vh'
    }}
>
  <PageSection>
  <Stack flex="1 1 0">
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h3" gutterBottom sx={styles.heading}>
        Bienvenido a Little Lemon
      </Typography>
      <Typography variant="body1" sx={styles.heading}>
        Disfruta nuestra deliciosa comida mediterránea.
      </Typography>
      <Button color="secondary" variant="contained">
        RESERVAR
      </Button>
    </Box>
  </Stack>

  <Stack flex="1 1 0">
    <Box display="flex" justifyContent="center">
      <Box
        component="img"
        src={MainImage}
        alt="Little Lemon Logo"
        sx={{ width: '100%', maxWidth: 400, borderRadius: 2,  transform: 'rotate(90deg)', }}
      />
    </Box>
  </Stack>
  </PageSection>
</Stack>)
}