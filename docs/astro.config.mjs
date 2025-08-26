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
   				label: 'Answers',
   				items: [
					{ label: 'getAll', slug: 'answers/getall'},
					{ label: 'get', slug: 'answers/get' },
					{ label: 'create', slug: 'answers/create'},
					{ label: 'update', slug: 'answers/update' },
					{ label: 'delete', slug: 'answers/delete' },
					{ label: 'upvote', slug: 'answers/upvote' },
					{ label: 'removeUpvote', slug: 'answers/removeupvote' },
					{ label: 'downvote', slug: 'answers/downvote' },
					{ label: 'removeDownvote', slug: 'answers/removedownvote' },
					{ label: 'accept', slug: 'answers/accept' },
					{ label: 'unaccept', slug: 'answers/unaccept' },
   				]
   			},
			{
				label: 'Articles',
				items: [
					{ label: 'getAll', slug: 'articles/getall'},
					{ label: 'get', slug:'articles/get'},
					{ label: 'create', slug: 'articles/create'},
					{ label: 'update', slug: 'articles/update' },
					{ label: 'delete', slug: 'articles/delete' },
					{ label: 'upvote', slug: 'articles/upvote' },
					{ label: 'removeUpvote', slug: 'articles/removeupvote' },
					{ label: 'getLinkedQuestions', slug: 'articles/getlinkedquestions'},
				]
			},
			{
				label: 'Collections',
				items: [
					{ label: 'getAll', slug: 'collections/getall' },
					{ label: 'get', slug: 'collections/get' },
					{ label: 'create', slug: 'collections/create' },
					{ label: 'update', slug: 'collections/update' },
					{ label: 'delete', slug: 'collections/delete' },
				]
			},
			{
				label: 'Comments',
				items: [
					{ label: 'getAnswerComments', slug: 'comments/getanswercomments' },
					{ label: 'getArticleComments', slug: 'comments/getarticlecomments' },
					{ label: 'getQuestionComments', slug: 'comments/getquestioncomments' },
				]
			},
   			{
   				label: 'Questions',
   				collapsed: true,
   				items: [

   					{ label: 'create', slug: 'questions/create' },
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