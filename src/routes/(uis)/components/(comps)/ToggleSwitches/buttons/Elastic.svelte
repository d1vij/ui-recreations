<script lang="ts">
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import Title from "../Title.svelte";
</script>

{#snippet Button(label: string)}
    <label class="wrapper" {@attach vibrateOnClick(100)}>
        <input type="checkbox" />
        <span class="label">{label}</span>
        <span class="check">☑</span>
    </label>
{/snippet}
<div class="flex w-full flex-wrap justify-center gap-2 bg-slate-900 px-4 py-2 transition-all">
    {@render Button("Apple")}
    {@render Button("Banana")}
    {@render Button("Orange")}
    {@render Button("Grapes")}
    {@render Button("Pineapple")}
</div>
<Title>Elastic</Title>

<style lang="postcss">
    @reference "tailwindcss";
    .wrapper {
        @apply cursor-pointer bg-slate-700 text-sm text-gray-300 select-none md:text-lg;
        @apply rounded-2xl border-2 border-gray-300 px-3 py-2;
        @apply flex items-center justify-center gap-2;
        @apply transition-all duration-300;

        .check {
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            transition:
                max-width 300ms ease,
                opacity 300ms ease;
        }

        input {
            display: none;
        }

        &:has(input:checked) {
            @apply border-yellow-500 text-yellow-500;
            .check {
                max-width: 1.5rem; /* enough to fit the ☑ character */
                opacity: 1;
            }
        }
    }
</style>
