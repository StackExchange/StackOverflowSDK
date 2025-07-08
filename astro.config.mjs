// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
openapi-generator
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
   				label: 'Guides',
   				items: [
   					{ label: 'Getting Started', slug: 'guides/quickstart' },
   					{ label: 'Authentication', slug: 'guides/authentication' },
   					{ label: 'Rate Limits', slug: 'guides/rate-limiting' },
   				],
   			},
   			{
   				label: 'Questions',
   				collapsed: true,
   				items: [
   					{ label: 'create', slug: 'questions/create' },
   				]
   			},
   			{
   				label: 'Answers',
   				collapsed: true,
   				items: [
   					{ label: 'list', slug: 'answers/list' },
   				]
   			},
   			{
   				label: 'Tags',
   				collapsed: true,
   				items: [
   					{ label: 'search', slug: 'tags/search' },
   				]
   			},
   			{
   				label: 'API Reference',
   				autogenerate: { directory: 'reference' },
   			},
        ...openAPISidebarGroups,
      ],
    }),
  ],
});
