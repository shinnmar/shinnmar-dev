import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://shinnmar-dev.vercel.app",
  integrations: [sitemap()],
});
