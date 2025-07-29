// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
   integrations: [
   	starlight({
   		favicon: '/favicon.ico',
   		title: 'Stack Overflow for Teams SDK',
		editLink: {
        baseUrl: 'https://github.com/EstoesMoises/StackOverflowSDK/edit/main/docs',
      	},
   		logo: {
   			light: './src/assets/stackoverflow-black.svg',
   			dark: './src/assets/stackoverflow-black.svg',
   			replacesTitle: true
   		},
   		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
   		],
   	}),
   ],
});