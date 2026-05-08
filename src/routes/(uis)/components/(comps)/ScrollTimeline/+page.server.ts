import { range } from "@d1vij/shit-i-always-use";
import { nanoid } from "nanoid";
import { all } from "radashi";
import type { PageServerLoad } from "./$types";

export type Post = {
	slug: string;
	title: string;
	subtitle: string;
	image: string;
	author: {
		name: string;
		avatar: string;
		email: string;
	};
	content: string;
	dateCreated: string;
};
export const load: PageServerLoad = async ({ fetch }) => {
	const url = "https://lorem-api.com/api/article/";
	const requests = [...range(10)].map(() => fetch(url + nanoid()));

	const posts = await all(
		requests.map(async (req) => {
			const r = await req;
			return (await r.json()) as Post;
		}),
	);

	console.log("fetched posts");
	return { posts };
};
