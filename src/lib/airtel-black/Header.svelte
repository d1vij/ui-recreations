<script lang="ts">
    import { resolve } from "$app/paths";
</script>

{#snippet NavButton(to: string, title: string)}
    <a
        href={resolve(`/airtel-black#${to}`)}
        class="hover:text-airtel-red grid place-items-center text-sm font-bold transition-colors"
        >{title}</a
    >
{/snippet}

<header
    class="bg-airtel-black sticky top-0 z-200 flex h-15 w-full items-center justify-between gap-4 px-8"
>
    <!-- Logo -->
    <div class="flex flex-nowrap items-center justify-center gap-2">
        <!-- Blinking Light -->
        <div class="light bg-airtel-red size-2.5 rounded-4xl"></div>
        <div class="text-2xl font-black tracking-tighter">
            <span class="text-white">airtel</span>
            <span class="text-airtel-red">
                black<span class="text-white">out</span>
            </span>
        </div>
    </div>

    <div class="flex items-center justify-center gap-4">
        <div class="hidden h-full gap-4 md:flex">
            {@render NavButton("services", "Services")}
            {@render NavButton("ceo-letter", "CEO Letter")}
            {@render NavButton("case-study", "Case Study")}
            {@render NavButton("the-wall", "The Wall")}
            {@render NavButton("glossary", "Glossary")}
            {@render NavButton("FIQs", "FIQs")}
            {@render NavButton("awards", "Awards")}
            {@render NavButton("bingo", "Bingo")}
        </div>

        <button
            class={[
                "size-fit cursor-pointer rounded-3xl border border-white/25 p-2 px-3 text-sm",
                "hover:border-airtel-red font-semibold transition-all duration-300 hover:text-white",
            ]}
        >
            ▸ Tune
        </button>
    </div>
</header>

<style lang="scss">
    @keyframes pulsing {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.4;
            transform: scale(0.8);
        }
    }
    .light {
        animation-name: pulsing;
        animation-duration: 1800ms;
        animation-iteration-count: infinite;
    }
</style>
