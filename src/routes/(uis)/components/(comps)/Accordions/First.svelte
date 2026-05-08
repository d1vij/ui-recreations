<script lang="ts">
    let firstValue = $state("");
</script>

{#snippet HigherAccordion(label: string)}
    <label class="higher-accordion">
        <input
            type="checkbox"
            checked={firstValue === label}
            onchange={() => {
                if (firstValue === label) firstValue = Symbol().toString();
                else firstValue = label;
            }}
        />
        <h2 class="title">{label}</h2>
    </label>
{/snippet}

<section id="first">
    {@render HigherAccordion("apple")}
    {@render HigherAccordion("banana")}
    {@render HigherAccordion("grapes")}
</section>

<style lang="postcss">
    @reference "tailwindcss";

    #first {
        @apply w-full bg-slate-100;
        @apply p-16;
        @apply flex flex-col gap-4;
    }
    .higher-accordion {
        @apply h-16 w-full rounded bg-red-400;
        @apply border-3 border-black shadow shadow-gray-900;
        > input {
            display: none;
        }

        &:has(input:checked) .title::after {
            content: "-";
        }
        .title {
            @apply flex h-full items-center justify-between p-4;
            &::after {
                content: "+";
                @apply text-lg font-black;
            }
        }
    }
</style>
