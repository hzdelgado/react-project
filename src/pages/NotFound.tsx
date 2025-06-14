import { Stack, Typography } from '@mui/material';
import { PageSection } from '../components/PageSection';
import { Background } from './Booking/components/Background';

export default function NotFound() {
  return (
     <>
      <Background />
      <PageSection>
        <Stack display="flex" flexDirection="column" alignItems={"center"} sx={{ paddingX: 2 }}>
          <Typography variant="h2" gutterBottom>
            404 - Página no encontrada
          </Typography>
          <Typography variant="body1">
            La página que buscas no existe.
          </Typography>
        </Stack>
      </PageSection>
    </>
    
  );
}
