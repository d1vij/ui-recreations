<script module lang="ts">
    const numberInputPattern = /^-?\d*\.?\d+$/.source;
    const NINE_BY_FIVE = 9 / 5;
    const FIVE_BY_NINE = 1 / NINE_BY_FIVE;
</script>

<script lang="ts">
    import { round } from "radashi";
    let celsiusState = $state("");
    let fahrenheitState = $state("");
</script>

<svelte:head>
    <title>7guis | Temperature Converter</title>
</svelte:head>

<!-- We will make sure that whenever any of the input temperature is invalid, the celsius is set to 0 and fahrenheit to 32 -->
<div
    class="base-container flex max-w-[90%] flex-row items-center gap-2 bg-mauve-400/80 md:flex-row"
>
    <span class="input">
        <input
            type="text"
            pattern={numberInputPattern}
            bind:value={
                () => celsiusState,
                (v: string) => {
                    const parsed = parseFloat(v) || 0;
                    fahrenheitState = String(round(parsed * NINE_BY_FIVE + 32, 3));
                    celsiusState = v;
                }
            }
            placeholder="0"
        />
    </span>
    <span class="label">°C is</span>
    <span class="input">
        <input
            type="text"
            pattern={numberInputPattern}
            bind:value={
                () => fahrenheitState,
                (v: string) => {
                    const parsed = parseFloat(v) || 32;
                    celsiusState = String(round((parsed - 32) * FIVE_BY_NINE, 3));
                    fahrenheitState = v;
                }
            }
            placeholder="32"
        />
    </span>
    <span class="label">°F</span>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .base-container {
        @apply rounded-md border border-mauve-600/20 p-2 shadow-xs shadow-mauve-700/40;
    }

    .input {
        @apply max-w-20 min-w-0 shrink rounded bg-mauve-300 p-1 text-sm outline outline-mauve-600/20 md:text-base;
        &:has(input:invalid) {
            @apply bg-red-500/30 outline-red-700/40;
        }
        input {
            @apply w-full focus:outline-none;
        }
    }
    .label {
        @apply text-nowrap;
    }
</style>
