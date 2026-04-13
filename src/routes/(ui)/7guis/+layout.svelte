<script lang="ts">
    import type { Pathname } from "$app/types";
    import { resolve } from "$app/paths";
    import { page } from "$app/state";

    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import uiInfo from "./ui-info";

    const { children } = $props();

    const navLink: { title: string; path: Pathname }[] = [
        { title: "Counter", path: "/7guis/Counter" },
        { title: "Temperature Converter", path: "/7guis/Temperature-Converter" },
        { title: "Flight Booker", path: "/7guis/Flight-Booker" },
        { title: "Timer", path: "/7guis/Timer" },
        { title: "Circle Drawer", path: "/7guis/Circle-Drawer" },
        { title: "Cells", path: "/7guis/Cells" },
    ];

    let currentPathname = $derived(page.url.pathname);
    let info: string = $derived(uiInfo[currentPathname as keyof typeof uiInfo]);
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&display=swap"
        rel="stylesheet"
    />
    <title>7guis</title>
</svelte:head>

<div
    data-sveltekit-replacestate
    class={[
        "custom-font",
        "absolute inset-0 bg-mauve-200 text-mauve-900",
        "grid grid-rows-[auto_1fr] space-y-2 space-x-2 p-4 pt-0 md:grid-cols-[auto_1fr] md:grid-rows-1 md:p-6 md:pt-0",
    ]}
>
    <aside
        class="relative grid h-[35dvh] w-full grid-rows-[auto_1fr] overflow-scroll rounded-md bg-mauve-400 shadow shadow-mauve-900/40 md:h-full md:w-70 md:grid-cols-1 md:overflow-hidden"
    >
        <nav class="">
            <ul class="space-y-1 p-2">
                {#each navLink as { path, title } (path)}
                    {@const isSelected = resolve(path) === currentPathname}
                    <li
                        class={[
                            "flex size-full",
                            "font-medium transition-all duration-100",
                            "rounded shadow outline-2 ",
                            isSelected
                                ? "bg-mauve-500 text-mauve-300/75  shadow shadow-mauve-800/20 outline-mauve-600/80"
                                : "shadow-transparent outline-transparent hover:bg-mauve-600/20",
                        ]}
                    >
                        <a
                            class={["size-full p-2"]}
                            href={resolve(path)}
                            {@attach vibrateOnClick([15, 100, 15])}
                        >
                            <span class="md:text-lg">
                                {title}
                            </span>
                        </a>
                    </li>
                {/each}
            </ul>
            <hr class="mx-auto mt-2 w-[90%] rounded-full border-mauve-600/20" />
        </nav>

        <div class="grow scroll-smooth p-4 text-sm text-mauve-700 md:overflow-scroll">
            <p>
                {info}
            </p>
        </div>
    </aside>
    <main
        class={[
            "grid place-items-center",
            "rounded-md border border-mauve-600/20 bg-mauve-300 p-2 shadow-xs shadow-mauve-700/40",
        ]}
    >
        {@render children()}
    </main>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .custom-font {
        font-family: "IBM Plex Serif", serif;
        font-style: normal;
    }
</style>
