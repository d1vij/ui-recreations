<script lang="ts">
    import { onMount } from "svelte";
    import { Tween } from "svelte/motion";

    let minTime = 0; // seconds
    let maxTime = $state<number>(60); //seconds;

    let secondsElapsed = new Tween(0, { duration: 100 });
    onMount(() => {
        const id = setInterval(() => {
            if (secondsElapsed.current >= maxTime) return;
            secondsElapsed.target++;
        }, 1000);
        return () => clearInterval(id);
    });
</script>

<svelte:head>
    <title>7guis | Timer</title>
</svelte:head>

<div class="w-60 rounded-md border border-mauve-500/50 bg-mauve-400 p-4 shadow shadow-mauve-600/40">
    <div class="mb-6">
        <div class="relative text-mauve-600">
            <span class="absolute -bottom-3 left-1 text-xs">0</span>
            <progress value={secondsElapsed.current} max={maxTime} class="timer-progress"
            ></progress>
            <span class="absolute -bottom-3 left-1/2 text-xs">{maxTime / 2}</span>
            <span class="absolute right-1 -bottom-3 text-xs">{maxTime}</span>
        </div>
    </div>

    <div>
        <input type="range" min={minTime} max={60} step="0.1" class="range" bind:value={maxTime} />
    </div>

    <button
        onclick={() => (secondsElapsed.target = 0)}
        class="w-full cursor-pointer rounded border border-mauve-500/50 bg-mauve-300 px-2 py-1 shadow-sm shadow-mauve-600/20"
        >Reset</button
    >
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .timer-progress {
        appearance: none;

        /*Firefox*/
        @apply h-5 w-full rounded bg-mauve-300;
        &::-moz-progress-bar {
            @apply m-1 rounded bg-mauve-600 shadow shadow-mauve-800/70 transition-all;
            height: calc(100% - --spacing(2));
        }

        /*Chromium Based*/
        &::-webkit-progress-bar {
            @apply size-fit h-5 w-full rounded bg-transparent p-1;
        }

        &::-webkit-progress-value {
            @apply rounded bg-mauve-600 shadow shadow-mauve-800/70;
        }
    }

    .range {
        -webkit-appearance: none;
        /*Firefox*/
        cursor: pointer;
        @apply w-full;
        &::-moz-range-track {
            @apply rounded bg-mauve-600;
        }
        &::-moz-range-thumb {
            @apply size-3 rounded border-none bg-mauve-300;
        }
        &::-webkit-slider-runnable-track {
            @apply relative mb-2 h-1 rounded bg-mauve-600;
        }
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            @apply -mt-1 size-3 rounded bg-mauve-300;
        }
    }
</style>
