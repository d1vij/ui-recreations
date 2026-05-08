<script lang="ts">
    import { slide } from "svelte/transition";
    const { content, title }: { content: string; title: string } = $props();
    import { InnerAccordionState } from "./First.svelte";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    const selfSymbol = InnerAccordionState.create();
    const isOpen = $derived(InnerAccordionState.isOpen(selfSymbol));
</script>

<div class="inner-accordion">
    <label class="toggle" {@attach vibrateOnClick(100)}>
        <input
            type="checkbox"
            onchange={() => {
                if (isOpen) InnerAccordionState.unregister();
                else InnerAccordionState.set(selfSymbol);
            }}
            checked={isOpen}
        />
        <span class="accordion-title">
            <span>
                {title}
            </span>
        </span>
    </label>
    {#if isOpen}
        <div class="accordion-content" transition:slide={{ duration: 300 }}>
            {content}
        </div>
    {/if}
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .toggle {
        @apply cursor-pointer select-none;
        > input {
            display: none;
        }

        &:has(> input:checked) .accordion-title::after {
            content: "-";
        }

        .accordion-title {
            > span {
                @apply underline decoration-2;
            }
            @apply flex items-center justify-between;
            &::after {
                content: "+";
                @apply text-2xl font-bold;
            }
        }
    }

    .accordion-content {
        @apply px-6 py-2;
    }
</style>
