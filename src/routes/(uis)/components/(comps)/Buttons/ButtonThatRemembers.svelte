<script lang="ts">
    import getClickCoordinates from "$lib/utils/getClickCoordinates";
    import { px } from "@d1vij/shit-i-always-use";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { random } from "radashi";
    let fingerprints = $state<Array<{ x: string; y: string }>>([]);
    let btnRef = $state<HTMLButtonElement | null>(null);
</script>

{#snippet Fingerprint(x: string, y: string)}
    <div class="fingerprint" style:--x={x} style:--y={y} style:--rot={`${random(-15, 5)}deg`}></div>
{/snippet}

<button
    class="btn"
    bind:this={btnRef}
    onclick={(e) => {
        if (!btnRef) return;
        const [x, y] = getClickCoordinates(e, btnRef);
        fingerprints.push({ x: px(x), y: px(y) });
    }}


    {@attach vibrateOnClick(100)}
>
    Touch Me

    {#each fingerprints as { x, y }, idx (idx)}
        {@render Fingerprint(x, y)}
    {/each}
</button>

<style lang="postcss">
    @reference "tailwindcss";

    .btn {
        @apply relative rounded border-2 border-neutral-700 bg-neutral-900 px-15 w-full md:w-fit py-4 text-lg text-neutral-300;
        @apply cursor-pointer overflow-clip;

        transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &:active {
            transform: scale(99%);
        }
    }

    .fingerprint {
        position: absolute;
        left: var(--x);
        top: var(--y);
        transform: rotate(var(--rot));

        @apply pointer-events-none -translate-1/2;

        @apply size-20;
        background-color: #ffffff10;
        mask-image: url("$lib/assets/fingerprint.svg");
        mask-composite: intersect;
        /*mask-repeat: no-repeat;*/
        mask-size: --spacing(20) --spacing(20);
    }
</style>
