import type { LayoutServerLoad } from './$types'
import { all_courses } from '$lib/backend/db_get'

// /** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = async () => {
	return await all_courses()
}
