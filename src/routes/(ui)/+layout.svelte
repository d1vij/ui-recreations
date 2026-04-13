<script lang="ts">
    import { resolve } from "$app/paths";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    const { children } = $props();
</script>

<nav class="g-stone-200 h-13 bg-stone-200 p-3 pl-4 font-playpen text-stone-900">
    <a
        class="rounded-3xl bg-stone-400/50 p-1 px-2 shadow-xs shadow-stone-800/40 transition-all ease-in hover:shadow-sm"
        href={resolve("/")}
        {@attach vibrateOnClick(100)}>Go back</a
    >
</nav>

<main class={["absolute top-13 right-0 bottom-0 left-0 overflow-scroll"]}>
    {@render children?.()}
</main>
