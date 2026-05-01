<script lang="ts">
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import Title from "../Title.svelte";
</script>

{#snippet Button(label: string)}
    <label class="wrapper" {@attach vibrateOnClick(200)}>
        <input type="checkbox" />
        <span class="label">{label}</span>
        <span class="check">☑</span>
    </label>
{/snippet}
<div class="flex w-fit gap-4 bg-slate-900 px-4 py-2 transition-all">
    {@render Button("Apple")}
    {@render Button("Banana")}
    {@render Button("Orange")}
</div>
<Title>Elastic</Title>

<style lang="postcss">
    @reference "tailwindcss";
    .wrapper {
        @apply h-10 cursor-pointer bg-slate-700 text-lg text-gray-300 select-none;
        @apply rounded-2xl border-2 border-gray-300 p-3;
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
