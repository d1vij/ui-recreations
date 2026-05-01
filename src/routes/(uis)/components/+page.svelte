<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Pathname } from "$app/types";
    import { draw } from "radashi";

    import { endpoints } from "./endpoints";
    const randomEndpoint = draw(endpoints);
</script>

<h1 class="mb-6 font-[Caprasimo] text-4xl">Components</h1>
<span class="mb-4 text-lg">Recreating indivisual components.</span>

<svelte:head>
    <title>Components | Home</title>
</svelte:head>
<div>
    <a
        href={resolve(`/components/${randomEndpoint}` as Pathname)}
        class="cursor-pointer rounded-lg border-2 border-taupe-500/50 bg-taupe-400 p-2 tracking-wide text-taupe-800 shadow shadow-taupe-400/20"
        >I'm Feeling Lucky</a
    >
</div>

<style lang="postcss">
    @reference "tailwindcss";
    /* gloock-latin-400-normal */
</style>
