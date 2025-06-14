import { Stack } from "@mui/material";
import type { ReactNode } from "react";
type PageSectionProps = {
  children: ReactNode;
};

export function PageSection({ children }: PageSectionProps) {
  return (
    <Stack
      component="section"
      direction={{ xs: "column", md: "row" }}
      sx={{
        maxWidth: "1100px",
        alignItems: "center",
        columnGap: { xs: 4, md: 12 },
        rowGap: { xs: 4, md: 0 },
        width: "100%",
        mx: "auto",
      }}
    >
      {children}
    </Stack>
  );
}
