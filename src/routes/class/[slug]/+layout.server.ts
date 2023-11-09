import type { LayoutServerLoad } from './$types'
import { all_courses } from '$lib/backend/sample/test'

// /** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = async () => {
	return {
		// posts: await db.getPostSummaries()
		// posts: [{slug: 'nyt', title: 'New York Times'}, {slug: 'wsj', title: 'Wall Street Journal'}]
		courses: await all_courses(),
	}
}
