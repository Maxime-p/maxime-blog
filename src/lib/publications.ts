import { getCollection, type CollectionEntry } from 'astro:content';

export async function getNewsItems() {
	return (await getCollection('news')).sort(
		(first, second) =>
			second.data.sourcePubDate.valueOf() - first.data.sourcePubDate.valueOf() ||
			first.id.localeCompare(second.id, undefined, { numeric: true }),
	);
}

export function getNewsResourceTypes(items: CollectionEntry<'news'>[]) {
	const counts = new Map<string, number>();

	for (const item of items) {
		counts.set(item.data.resourceType, (counts.get(item.data.resourceType) ?? 0) + 1);
	}

	return [...counts].sort(
		([firstType, firstCount], [secondType, secondCount]) =>
			secondCount - firstCount || firstType.localeCompare(secondType),
	);
}
