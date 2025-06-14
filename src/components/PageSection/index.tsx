import { Stack } from "@mui/material";
import type { ReactNode } from "react";
type PageSectionProps = {
  children: ReactNode;
};

export function PageSection({ children }: PageSectionProps) {
  return (
    <Stack
      direction="row"
      sx={{
        maxWidth: "1100px",
        alignItems: "center",
        columnGap: 12,
        width: "100%",
        mx: "auto", // centra horizontalmente
        px: 2, // padding lateral opcional para responsividad
      }}
    >
      {children}
    </Stack>
  );
}
