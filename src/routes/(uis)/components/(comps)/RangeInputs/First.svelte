<script lang="ts">
    import { useVibrate } from "@d1vij/shit-i-always-use/svelte";
    import type { Attachment } from "svelte/attachments";
    import { on } from "svelte/events";

    /**
     * Styling Input ranges
     *
     * 1. styling the track - ::-moz-range-track in firefox, -webkit-slider-runnable-track in chromium
     * 2. styling the thumb - ::-moz-range-thumb in firefox,
     */

    const vibrateOnChange: Attachment<HTMLInputElement> = (e) => {
        return on(e, "input", () => {
            useVibrate(20);
        });
    };
</script>

<div
    class="w-full md:w-fit space-y-4 rounded-lg border border-neutral-300 bg-neutral-200 px-5 py-10 shadow-sm md:px-20"
>
    <div
        class="input-wrapper"
        style:--color-background="var(--color-blue-200)"
        style:--color-track="var(--color-blue-400)"
    >
        <input
            class="input"
            type="range"
            max="10"
            min="1"
            step="1"
            defaultValue="8"
            {@attach vibrateOnChange}
        />
    </div>
    <div
        class="input-wrapper"
        style:--color-background="var(--color-pink-200)"
        style:--color-track="var(--color-pink-400)"
    >
        <input
            class="input"
            type="range"
            max="10"
            min="1"
            step="1"
            defaultValue="3"
            {@attach vibrateOnChange}
        />
    </div>
    <div
        class="input-wrapper"
        style:--color-background="var(--color-green-200)"
        style:--color-track="var(--color-green-400)"
    >
        <input
            class="input"
            type="range"
            max="10"
            min="1"
            step="1"
            defaultValue="6"
            {@attach vibrateOnChange}
        />
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    :root {
        --highlight: #ffffff40;
    }
    .input-wrapper {
        @apply flex w-full md:w-70;
        @apply rounded-full border-6 border-neutral-100;
        @apply overflow-clip;
        background-color: var(--color-background);
    }
    .input {
        appearance: none;
        @apply h-8 w-full cursor-pointer;

        &::-webkit-slider-thumb {
            appearance: none;
            @apply size-8 rounded-full;

            @apply outline;
            outline-color: var(--color-track);
            border-color: var(--color-track);

            background:
                radial-gradient(
                    circle at 0.75em 0.6em,
                    var(--highlight) calc(0.2em - 1px),
                    #0000 0.2em
                ),
                linear-gradient(90deg, var(--color-track) 0.75em, var(--color-track) 0) 0 0 / 100%
                    50% no-repeat var(--color-track);

            /*The continous bar before the thumb is jut rpeeated box shadow's at an offset*/
            box-shadow:
                calc(--spacing(-7) * 1) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 2) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 3) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 4) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 5) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 6) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 7) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 8) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 9) 0px 0px --spacing(4) var(--color-track);
        }
        &::-moz-range-thumb {
            appearance: none;
            @apply size-7 rounded-full;

            @apply outline;
            outline-color: var(--color-track);
            border-color: var(--color-track);

            background:
                radial-gradient(
                    circle at 0.75em 0.6em,
                    var(--highlight) calc(0.2em - 1px),
                    #0000 0.2em
                ),
                linear-gradient(90deg, var(--color-track) 0.75em, var(--color-track) 0) 0 0 / 100%
                    50% no-repeat var(--color-track);

            /*The continous bar before the thumb is jut rpeeated box shadow's at an offset*/
            box-shadow:
                calc(--spacing(-7) * 1) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 2) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 3) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 4) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 5) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 6) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 7) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 8) 0px 0px --spacing(4) var(--color-track),
                calc(--spacing(-7) * 9) 0px 0px --spacing(4) var(--color-track);
        }
        &::-moz-range-track {
        }
    }
</style>
