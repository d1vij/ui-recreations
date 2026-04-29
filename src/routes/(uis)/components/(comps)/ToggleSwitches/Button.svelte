<script lang="ts">
    import { IsInViewport } from "runed";
    import type { Component } from "svelte";

    type Props = {
        componentPromise: Promise<Component>;
        parent: HTMLDivElement;
    };

    const { componentPromise, parent }: Props = $props();

    let ref = $state<HTMLDivElement | null>(null);
    // svelte-ignore state_referenced_locally
    const isInViewport = new IsInViewport(() => ref, { once: true, root: parent });
</script>

<!-- We'll lazy import all components but only resolve them when in viewport -->
<div class="relative flex flex-col items-center justify-around gap-4" bind:this={ref}>
    {#if isInViewport.current}
        {#await componentPromise then Button}
            <Button />
        {/await}
    {/if}
</div>
