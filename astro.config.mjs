// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/medjedai' }],
			sidebar: [
				{
					label: 'Guides',
					collapsed: false,
					items: [
						{ label: 'Example Guide', slug: '' },
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
