<script lang="ts">
    import type { Component } from "svelte";
    import Button from "./Button.svelte";
    const glob = import.meta.glob<Component>("./buttons/*.svelte", { import: "default" });
    const buttonPromises = Object.values(glob);

    let ref = $state<HTMLDivElement | null>(null);
</script>

<svelte:head>
    <title>Components | Toggle Switches</title>
</svelte:head>

<div
    class={[
        "container",
        // "grid w-full grid-cols-4 justify-items-center gap-x-16 gap-y-32 overflow-auto p-9 ",
        "flex flex-wrap gap-x-16 gap-y-32 p-8",
    ]}
    bind:this={ref}
>
    {#each buttonPromises as btnPromise, idx (idx)}
        <Button componentPromise={btnPromise()} parent={ref} />
    {/each}
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>
