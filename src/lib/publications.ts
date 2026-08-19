import { getCollection, type CollectionEntry } from 'astro:content';

export async function getNewsItems() {
	return (await getCollection('news')).sort(
		(first, second) =>
			second.data.sourcePubDate.valueOf() - first.data.sourcePubDate.valueOf() ||
			first.id.localeCompare(second.id, undefined, { numeric: true }),
	);
}

export function getNewsTags(items: CollectionEntry<'news'>[]) {
	const counts = new Map<string, number>();

	for (const item of items) {
		for (const tag of new Set(item.data.tags)) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts].sort(
		([firstTag, firstCount], [secondTag, secondCount]) =>
			secondCount - firstCount || firstTag.localeCompare(secondTag),
	);
}
