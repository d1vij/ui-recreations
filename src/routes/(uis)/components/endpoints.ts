const glob = import.meta.glob("./\\(comps\\)/**/\\+page.svelte");
export const endpoints = Object.keys(glob).map((e) =>
    e.replace("./(comps)/", "").replace("/+page.svelte", "")
);
