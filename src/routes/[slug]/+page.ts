import * as v from "valibot";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { links } from "$lib/links";

export type ValidSlugs = keyof typeof links;
const schema = v.object({
	slug: v.picklist(Object.keys(links) as ValidSlugs[]),
});

export const load: PageLoad = ({ params }) => {
	const results = v.safeParse(schema, params);
	if (!results.success) {
		throw error(422, {
			message: "Validation Erorr",
			info: results,
		} as App.Error);
	}

	return links[results.output.slug] as (typeof links)[string];
};
