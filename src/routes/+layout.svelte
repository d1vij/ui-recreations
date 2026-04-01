<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { resolve, base } from "$app/paths";
    import { page } from "$app/state";

    let { children } = $props();
    let isRoot = $derived(page.url.pathname === base + "/");
</script>

<svelte:head>
    <title>Recreating UIs in Svelte</title>
    <link rel="icon" href={favicon} />
    <link
        href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{#if !isRoot}
    <nav class="bg-stone-200 p-3 pl-4 font-playpen text-stone-900">
        <a
            href={resolve("/")}
            class="rounded-3xl bg-stone-400/50 p-1 px-2 shadow-xs shadow-stone-800/40 transition-all ease-in hover:shadow-sm"
            >Go back</a
        >
    </nav>
{/if}

{@render children()}
