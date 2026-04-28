<script lang="ts">
    import Title from "../Title.svelte";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { range } from "@d1vij/shit-i-always-use";

    let active = $state(false);
    const pattern = Array.from(range(20)).flatMap(() => [10, 1]);
</script>

<label
    class={["button", "size-fit rounded-full bg-taupe-500 p-0.5"]}
    {@attach vibrateOnClick(pattern)}
>
    <div class={["wrapper", active && "active"]}>
        <input class="checkbox" class:active={"active"} type="checkbox" bind:checked={active} />
        <div class="bob"></div>
    </div>
</label>
<Title>Fluid Button</Title>

<style lang="postcss">
    @reference "tailwindcss";

    .checkbox {
        display: none;
    }

    .button {
        @apply inset-shadow-xs inset-shadow-taupe-600;
        @apply outline outline-taupe-600;
        @apply shadow-xs shadow-taupe-600;
    }

    .wrapper {
        @apply cursor-pointer bg-taupe-500;
        /*NOTE: on changing the height or width here*/
        @apply h-5 w-10 rounded-full;
        @apply overflow-clip;

        &.active .bob {
            @apply bg-taupe-300;
            /*NOTE: change translate value here*/
            @apply translate-x-5;
        }
    }

    .bob {
        @apply bg-taupe-700;
        @apply h-full rounded-full;
        /*NOTE: change translate value herwe*/
        @apply -translate-x-5;
        @apply drop-shadow-xs drop-shadow-taupe-600;

        --timing-fn: linear(
            0,
            0.029 1.3%,
            0.119 2.8%,
            0.659 8.7%,
            0.871 11.6%,
            1.009 14.6%,
            1.052 16.2%,
            1.078 17.9%,
            1.088 19.7%,
            1.085 21.7%,
            1.014 31.4%,
            0.993 38%,
            1.001 57.6%,
            1
        );
        transition:
            background-color 300ms ease,
            translate 1.5s var(--timing-fn);
    }
</style>
