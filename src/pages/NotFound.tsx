import { Stack, Typography } from '@mui/material';
import { PageSection } from '../components/PageSection';
import { Background } from './Booking/components/Background';

export default function NotFound() {
  return (
     <>
      <Background title="404 - Página no encontrada" />
      <PageSection>
        <Stack display="flex" flexDirection="column" alignItems={"start"} sx={{ mt: 6, maxWidth: 500, width: "100%", mx: "auto", px: 2 }}>
          <Typography variant="h2" gutterBottom>
            Ops!
          </Typography>
          <Typography variant="body1">
            La página que buscas no existe.
          </Typography>
        </Stack>
      </PageSection>
    </>
    
  );
}
