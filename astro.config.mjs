import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://shafayetsadi.github.io",
  base: "/",
  integrations: [tailwind(), mdx(), solidJs()]
});