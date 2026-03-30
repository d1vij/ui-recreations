<script module lang="ts">
    const catagories = [
        "XMusic",
        "X08 Short",
        "XSource code",
        "XTiny Desk Concerts",
        "XScripting language",
        "XPodcasts Mixes",
        "XGorillaz",
        "XChad Smith",
        "XAJ",
        "XIndie",
        "Music",
        "08 Short",
        "Source code",
        "Tiny Desk Concerts",
        "Scripting language",
        "Podcasts Mixes",
        "Gorillaz",
        "Chad Smith",
        "AJ",
        "Indie"
    ] as const;
    type Directions = "right" | "left";
</script>

<script lang="ts">
    import { ArrowLeft, ArrowRight } from "lucide-svelte";

    let activeCatagory = $state<(typeof catagories)[number]>(catagories[0]);
    let containerRef = $state<HTMLUListElement>();
</script>

<div class="relative flex w-full place-items-center justify-between">
    {@render DirectionButton("left")}

    <ul
        class={[
            "container",
            "flex min-w-full grow flex-nowrap gap-1 overflow-x-scroll scroll-smooth px-10"
        ]}
        bind:this={containerRef}
    >
        {#each catagories as cat (cat)}
            {@render CatagoryIcon(cat, activeCatagory === cat)}
        {/each}
    </ul>

    {@render DirectionButton("right")}
</div>

{#snippet DirectionButton(direction: Directions)}
    <button
        onclick={() => {
            if (!containerRef) return;
            let scrollAmt = 100;
            if (direction === "right") {
                containerRef.scrollBy(scrollAmt, 0);
            } else {
                containerRef.scrollBy(-scrollAmt, 0);
            }
        }}
        class={[
            "absolute w-fit cursor-pointer rounded-3xl bg-primary px-1 text-nowrap opacity-75",
            { "right-0": direction === "right" }
        ]}
    >
        {#if direction === "left"}
            <ArrowLeft class="size-7" />
        {:else}
            <ArrowRight class="size-7" />
        {/if}
    </button>
{/snippet}

{#snippet CatagoryIcon(label: typeof activeCatagory, isActive: boolean)}
    <li>
        <button
            onclick={() => (activeCatagory = label)}
            class={[
                "w-fit cursor-pointer rounded-lg bg-secondary p-1 px-3 text-nowrap",
                isActive && "bg-white text-black"
            ]}
        >
            {label}
        </button>
    </li>
{/snippet}

<style lang="scss">
    .container {
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
