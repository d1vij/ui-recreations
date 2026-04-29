<script lang="ts">
    import Title from "../Title.svelte";
</script>

{#snippet Button(label: string)}
    <label class="wrapper">
        <input type="checkbox" />
        <span class="label">{label}</span>
        <span class="check">☑</span>
    </label>
{/snippet}
<div class="flex gap-4 bg-slate-900 p-4">
    {@render Button("Apple")}
    {@render Button("Banana")}
    {@render Button("Orange")}
</div>
<Title>Elastic</Title>

<style lang="postcss">
    @reference "tailwindcss";
    .wrapper {
        @apply h-10 cursor-pointer bg-gray-800;
        @apply rounded-2xl border-2 border-neutral-500 p-3;
        @apply flex items-center justify-center gap-2;

        @apply transition-all;
        .check {
            display: none;
        }
        input {
            display: none;
        }
        &:has(input:checked) {
            @apply border-yellow-500;

            .check {
                display: block;
            }
        }
    }
</style>
