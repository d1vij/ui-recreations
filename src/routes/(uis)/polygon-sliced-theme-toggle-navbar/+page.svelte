<div class="absolute inset-0 flex justify-center overflow-auto bg-black">
    <div class="navbar">
        {#each ["Horned melon", "Strawberry", "Papaya", "Pomelo", "Apple", "Peach", "Prune", "Blackberry", "Orange", "Cherry"] as fruit (fruit)}
            <div class="item">
                <span>
                    <span class="text">{fruit}</span>
                    <span class="icon">→</span>
                </span>
            </div>
        {/each}
    </div>
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 rotate-90  text-neutral-600 md:rotate-0 font-serif"
    >
        (uses no js)
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .navbar {
        @apply mx-auto flex w-fit -translate-y-25 gap-1;
        @apply rotate-90 md:rotate-0;
    }
    .item {
        @apply cursor-pointer bg-neutral-800;
        transition: translate 200ms ease-out;
        @apply h-40 min-w-10 md:min-w-20;

        @apply flex items-end font-semibold text-white;

        & > span {
            @apply flex w-full justify-between gap-4 p-4;
        }

        .icon {
            opacity: 0;
            transform: rotate(0deg);
            transition:
                transform 100ms ease-in,
                opacity 200ms ease-in;
        }

        &:hover .icon {
            transform: rotate(-45deg);
            opacity: 1;
        }
    }

    .item:hover {
        @apply translate-y-12;
    }
    /*selecting -1 sibling*/
    .item:has(+ .item:hover) {
        @apply translate-y-6;
    }

    /*selecting +1 sibling*/
    .item:hover + .item {
        @apply translate-y-6;
    }

    /*selecting -2 sibling*/
    .item:has(+ .item + .item:hover) {
        @apply translate-y-3;
    }
    /*selecting +2 sibling*/
    .item:hover + .item + .item {
        @apply translate-y-3;
    }
</style>
