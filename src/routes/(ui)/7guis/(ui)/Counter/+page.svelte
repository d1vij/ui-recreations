<script lang="ts">
    let count = $state(0);
    function handleClick() {
        count++;
    }
</script>

<svelte:head>
    <title>7guis | Counter</title>
</svelte:head>

<div class="base-container flex size-40 flex-col items-center justify-center gap-4 bg-mauve-400/80">
    <h2 class="mt-4 text-lg">The count is <span class="text-mauve-600">{count}</span></h2>
    <button
        onclick={handleClick}
        type="button"
        class="base-container transform-gpu cursor-pointer bg-mauve-300 p-2 transition-all duration-100 hover:shadow! active:scale-98 active:shadow-xs! md:active:shadow!"
    >
        Increment
    </button>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .base-container {
        @apply rounded-md border border-mauve-600/20 p-2 shadow-xs shadow-mauve-700/40;
    }
</style>
