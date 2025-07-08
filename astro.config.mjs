// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: "api/schema",
            schema: "./src/schemas/swagger.json",
			label: "API Schema"
          },
        ]),
      ],
      favicon: "/favicon.ico",
      title: "Stack Overflow for Teams SDK",
      logo: {
        light: "./src/assets/stackoverflow-black.svg",
        dark: "./src/assets/stackoverflow-black.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "guides/quickstart" },
            { label: "Authentication", slug: "guides/authentication" },
            { label: "Rate Limits", slug: "guides/rate-limiting" },
          ],
        },
        ...openAPISidebarGroups,
      ],
    }),
  ],
});
