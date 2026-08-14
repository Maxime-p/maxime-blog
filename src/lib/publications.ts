import { getCollection, type CollectionEntry } from 'astro:content';

function orderNewsItems(items: CollectionEntry<'news'>[]) {
	// Numeric file-name prefixes are the editor-controlled News Item order.
	return [...items].sort((first, second) =>
		first.id.localeCompare(second.id, undefined, { numeric: true }),
	);
}

export async function getNewsItems() {
	return orderNewsItems(await getCollection('news'));
}

export async function getLatestNewsItems(limit = 3) {
	return (await getNewsItems()).slice(0, limit);
}

export async function getLatestBlogPosts(limit = 3) {
	return (await getCollection('blog'))
		.sort((first, second) => second.data.pubDate.valueOf() - first.data.pubDate.valueOf())
		.slice(0, limit);
}
