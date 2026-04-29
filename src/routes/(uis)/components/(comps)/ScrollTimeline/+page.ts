import { range } from "@d1vij/shit-i-always-use";
import { nanoid } from "nanoid";
import { all } from "radashi";

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
    dateCreated: string; // ISO 8601 date-time string
};
export const load = async ({ fetch }) => {
    const url = "https://lorem-api.com/api/article/";
    const requests = [...range(10)].map(() => fetch(url + nanoid()));

    // Single un-awaited promise — SvelteKit streams this
    const posts = all(
        requests.map(async (req) => {
            const r = await req;
            return (await r.json()) as Post;
        })
    );

    return { posts };
};
