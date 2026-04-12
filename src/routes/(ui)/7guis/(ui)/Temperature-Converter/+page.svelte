<script lang="ts">
    let celsius = $state("");
    let fahrenheit = $state("");
</script>

<svelte:head>
    <title>7guis | Temperature Converter</title>
</svelte:head>

<div class="base-container flex flex-col gap-2 bg-mauve-400/80 md:flex-row">
    <input
        type="number"
        class="input"
        bind:value={celsius}
        placeholder="Celsius"
    />
    <span class="label">Celsius = </span>
    <input type="text" class="input" bind:value={fahrenheit} placeholder="Fahrenheit" />
    <span class="label">Fahrenheit</span>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .base-container {
        @apply rounded-md border border-mauve-600/20 p-2 shadow-xs shadow-mauve-700/40;
    }

    .input {
        @apply w-full bg-mauve-300 outline outline-mauve-600/20;
        @apply invalid:bg-red-400;
    }
    .label {
        @apply text-nowrap;
    }
</style>
