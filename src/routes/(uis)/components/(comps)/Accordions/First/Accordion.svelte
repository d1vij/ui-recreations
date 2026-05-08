<script lang="ts">
    import { slide } from "svelte/transition";
    import { OuterAccordionState } from "./First.svelte";
    import InnerAccordion from "./InnerAccordion.svelte";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    type Props = {
        background: string;
        title: string;
        content: {
            title: string;
            content: string;
        }[];
    };

    const { title, content, background }: Props = $props();

    const selfSymbol = OuterAccordionState.create();
    const isOpen = $derived(OuterAccordionState.isOpen(selfSymbol));
</script>

<div class="accordion" style:--background={background}>
    <label class="toggle" {@attach vibrateOnClick(100)}>
        <input
            type="checkbox"
            onchange={() => {
                if (isOpen) OuterAccordionState.unregister();
                else OuterAccordionState.set(selfSymbol);
            }}
            checked={isOpen}
        />
        <span class="accordion-title">
            {title}
        </span>
    </label>
    {#if isOpen}
        <div class="accordion-content" transition:slide={{ duration: 300 }}>
            {#each content as innie (innie.title)}
                <InnerAccordion content={innie.content} title={innie.title} />
            {/each}
        </div>
    {/if}
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .accordion {
        @apply bg-(--background);
        @apply transition-colors duration-300;

        &:is(:hover, :active) {
            @apply bg-neutral-300;
        }

        /*Reset color when hovering over the content*/
        &:has(.accordion-content:is(:hover, :active)) {
            @apply bg-(--background);
        }

        @apply rounded border-3 shadow-xs shadow-gray-800;
    }
    .toggle {
        @apply cursor-pointer select-none;
        @apply block p-4;
        > input {
            display: none;
        }

        &:has(> input:checked) .accordion-title::after {
            content: "-";
        }

        .accordion-title {
            @apply flex items-center justify-between;
            &::after {
                content: "+";
                @apply text-4xl font-bold;
            }
        }
    }
    .accordion-content {
        @apply m-1 rounded bg-white p-6;
        @apply inset-shadow-xs inset-shadow-black/30;
    }
</style>
