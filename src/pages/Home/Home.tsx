import { Stack } from "@mui/material";
import { FoodSlider } from "./components/food-slider";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <Stack display="flex" flexDirection="column" height="100%" >
      <Hero />
      <FoodSlider />
    </Stack>
  );
}
