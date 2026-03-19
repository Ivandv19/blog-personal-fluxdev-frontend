import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/payload';

export async function GET(context: APIContext) {
	const posts = await getPosts();

	return rss({
		title: 'FluxDev Blog',
		description:
			'Notas personales sobre arquitecturas, desarrollo web moderno y productos digitales.',
		site: context.site!.toString(),
		items: posts.map((post) => ({
			title: post.title,
			pubDate: new Date(post.date || post.createdAt),
			description:
				post.excerpt ||
				post.content?.root?.children?.[0]?.children?.[0]?.text?.substring(0, 160) ||
				'',
			link: `/blog/${post.slug}`,
			categories: post.tag ? [post.tag] : [],
		})),
		customData: '<language>es-mx</language>',
	});
}
