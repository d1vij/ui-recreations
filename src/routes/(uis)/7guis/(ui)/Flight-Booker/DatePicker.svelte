<script lang="ts" module>
    import { onMount } from "svelte";
    import type { SvelteDate } from "svelte/reactivity";

    type DateObj = {
        month: number;
        day: number;
        year: number;
    };
    export type DatePickerProps = {
        date: SvelteDate;
    };
</script>

<script lang="ts">
    const { date = $bindable() }: DatePickerProps = $props();

    let ref = $state<HTMLDivElement>();
    onMount(() => {
        ref?.showPopover();
    });
</script>

<div class={["picker", "my-10 bg-red-300"]}>
    <h1>
        <span>Pick Date</span>
    </h1>
    <button popovertarget="foo"> Toggle </button>
    <div popover class={["modal", "bg-green-30 size-20"]} id="foo" bind:this={ref}>div</div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .picker {
        position: relative;
        anchor-name: --picker;
    }
    .modal {
        position-anchor: --picker;
        top: anchor(bottom);
        right: anchor(center, 100px);
    }
</style>
