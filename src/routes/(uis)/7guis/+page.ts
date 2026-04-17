import { resolve } from "$app/paths";
import { redirect } from "@sveltejs/kit";

export const load = () => {
	// redirect to first ui instead of loading the page component
	redirect(303, resolve("/7guis/Counter"));
};
