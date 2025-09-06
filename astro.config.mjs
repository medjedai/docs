// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.medjed.ai',
	integrations: [
		starlight({
			title: 'Medjed AI', // 保留title配置，用于元数据等
			logo: {
				src: './public/favicon.svg',
				alt: 'Medjed AI Logo',
				// 添加这两个选项来控制logo和标题的显示行为
				replacesTitle: true, // 使logo替换标题显示
				darkSrc: './public/favicon.svg', 
			},
			social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/WB2qdPmbpA' },{ icon: 'github', label: 'GitHub', href: 'https://github.com/medjedai' }],
			editLink: {
        baseUrl: 'https://github.com/medjedai/docs/edit/main/docs/',},
			sidebar: [
				{
					label: 'Guides',
					collapsed: false,
					items: [
						{ label: 'Introduction', slug: '' },
						{ label: 'Quickstart', slug: 'guides/quickstart' },
					],
				},
								{
					label: 'Instances',
					collapsed: false,
					items: [
						{ label: 'Introduction', slug: '' },
						{ label: 'Quickstart', slug: 'guides/quickstart' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
