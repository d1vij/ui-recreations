import * as v from "valibot";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

import AirtelBlack from "$lib/airtel-black/App.svelte";
import FluidNavbar from "$lib/fluid-navbar/App.svelte";
import ResponsiveSidebar from "$lib/responsive-sidebar/App.svelte";
import ProfileCard from "$lib/profile-card/App.svelte";

const pages = {
    "airtel-black": AirtelBlack,
    "fluid-navbar": FluidNavbar,
    "responsive-sidebar": ResponsiveSidebar,
    "profile-card": ProfileCard,
} as const;

export type ValidSlugs = keyof typeof pages;
const schema = v.object({
    id: v.picklist(Object.keys(pages) as (keyof typeof pages)[]),
});

export const load: PageLoad = ({ params }) => {
    console.log("loader");
    const results = v.safeParse(schema, params);
    if (!results.success) {
        throw error(422, {
            message: "Validation Erorr",
            info: results,
        } as App.Error);
    }

    return {
        component: pages[results.output.id],
    };
};
