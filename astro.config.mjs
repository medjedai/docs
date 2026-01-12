// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import starlightGiscus from 'starlight-giscus';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.medjed.ai',
	// 性能优化配置
	image: {
		// 启用图片优化
		remotePatterns: [
			{
				domain: '*.medjed.ai',
			},
		],
		// 配置 Sharp 优化选项
		sharpOptions: {
			quality: 80,
		},
	},
	// 构建优化
	build: {
		// 启用代码分割
		split: true,
		// 优化 CSS
		cssCodeSplit: true,
		// 压缩 HTML
		minify: true,
	},
	// 启用压缩
	compressHTML: true,
	integrations: [
		starlight({
			title: 'Medjed AI',
			description: 'Comprehensive documentation for Medjed AI services, including instances, API, and billing information.',
			logo: {
				src: './public/favicon.svg',
				alt: 'Medjed AI Logo',
				replacesTitle: true,
				darkSrc: './public/favicon.svg', 
			},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/WB2qdPmbpA', target: '_blank' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/medjedai', target: '_blank' }
			],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
				Footer: './src/components/Footer.astro',
				Header: './src/components/Header.astro',
				PageTitle: './src/components/CustomPageTitle.astro'
			},
			editLink: {
				baseUrl: 'https://github.com/medjedai/docs/edit/main/'
			},
			// 基础 SEO 配置
			head: [
				{ tag: 'meta', attrs: { name: 'keywords', content: 'Medjed AI, AI instances, GPU instances, CPU instances, cloud computing, AI infrastructure' } },
				{ tag: 'meta', attrs: { name: 'author', content: 'Medjed AI Team' } },
				{ tag: 'script', attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7QXF8Z4HE8' } },
				{ tag: 'script', attrs: {}, content: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-7QXF8Z4HE8\');' }
			],
			plugins: [
				// Generate the OpenAPI documentation pages.
				starlightOpenAPI([
					{
						base: 'api-reference',
						schema: 'https://petstore.swagger.io/v2/swagger.json',
						label: 'API Reference',
						collapsed: false
					}
				]),
				// Configure Giscus comments
				starlightGiscus({
					repo: 'medjedai/docs',
					repoId: 'R_kgDOPFSM_g',
					category: 'Q&A',
					categoryId: 'DIC_kwDOPFSM_s4C0YkD'
				}),
				// Generate llms.txt files
				starlightLlmsTxt()
			],
			sidebar: [
						{
							label: 'Guides',
							collapsed: false,
							items: [
								{ label: 'Introduction', slug: '' },
								{ label: 'Quickstart', slug: 'guides/quickstart' }
							],
						},
						{
							label: 'VMs',
							collapsed: false,
							items: [
								{ label: 'VMs Overview', slug: 'vms' },
								{ label: 'Pricing', slug: 'vms/pricing' },
								{
									label: 'Choosing VMs',
									collapsed: false,
									items: [
										{ label: 'SSH Setup', slug: 'vms/ssh' },
										{ label: 'SSH Troubleshooting', slug: 'vms/ssh' },
										{ label: 'Advanced SSH Config', slug: 'vms/ssh' }
									]
								},
								{
									label: 'Connecting to VMs',
									collapsed: false,
									items: [
										{ label: 'SSH Setup', slug: 'vms/ssh' },
										{ label: 'SSH Connection', slug: 'vms/ssh' },
										{ label: 'Advanced SSH Config', slug: 'vms/ssh' }
									]
								},
								{ label: 'Managing VMs', slug: 'vms/ssh' }
							],
						},
						{
							label: 'Storage',
							collapsed: false,
							autogenerate: { directory: 'storage' },
						},
						{
							label: 'Examples',
							collapsed: false,
							autogenerate: { directory: 'examples' },
						},
						{
							label: 'Bare Metal GPUs',
							collapsed: false,
							autogenerate: { directory: 'bare-metal-gpus' },
						},
						{
							label: 'Reference',
							collapsed: false,
							items: [
								{ label: 'Billing Information', slug: 'reference/billing-information' },
								{ label: 'Referral Programs', slug: 'reference/referrals' },
								{ label: 'Manage Public Keys', slug: 'reference/public-keys' },
								{
									label: 'Hosting',
									collapsed: false,
									items: [
										{ label: 'SSH Setup', slug: 'vms/ssh' },
										{ label: 'SSH Connection', slug: 'vms/ssh' },
										{ label: 'Advanced SSH Config', slug: 'vms/ssh' }
									]
								},
								{ label: 'AI Tooling', slug: 'reference/ai-tooling' }
							],
						}
					],
		}),
	],
});
