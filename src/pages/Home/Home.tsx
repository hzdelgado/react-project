import { Stack } from "@mui/material";
import { FoodSlider } from "./components/FoodSlider";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <Stack display="flex" flexDirection="column" height="100%" >
      <Hero />
      <FoodSlider />
    </Stack>
  );
}
