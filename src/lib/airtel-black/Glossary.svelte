<script lang="ts">
    import { onMount } from "svelte";

    type CardProps = {
        title: string;
        subtitle: string;
        body: string;
    };

    const cards: CardProps[] = [
        {
            title: "Resolved",
            subtitle: "Official: Your issue has been fixed.",
            body: "Actual: Your ticket has been closed. The issue remains. These are different things.",
        },
    ];

    let dayCounter = $state(0);
    const start = new Date(2026, 1, 18);
    const today = new Date();
    const ONE_DAY = 1000 * 60 * 60 * 24; // MS
    const totalDays = Math.max(0, Math.floor((today.getTime() - start.getTime()) / ONE_DAY));
    const step = Math.max(1, Math.floor(totalDays / 60));

    onMount(() => {
        const id = setInterval(() => {
            dayCounter += step;
            if (dayCounter >= totalDays) {
                dayCounter = totalDays;
                clearInterval(id);
            }
        }, 30);

        return () => {
            clearInterval(id);
        };
    });
</script>

<section id="glossary" class={["p-25 px-8", "bg-airtel-black"]}>
    <div class="mx-auto max-w-275 text-white">
        <h2 class="text-sm font-black tracking-widest text-[#FF4D4D] uppercase">
            the airtel dictionary
        </h2>
        <div class="mt-4 mb-5 text-4xl font-black">
            <h1>What They Say vs.</h1>
            <h1>What They Mean.</h1>
        </div>
        <div
            class="grid grid-cols-1 overflow-clip rounded-2xl border border-b-0 border-white/10 md:grid-cols-2 lg:grid-cols-3"
        >
            {#each Array(6)}
                {#each cards as card (card.title)}
                    {@render Card(card)}
                {/each}
            {/each}
        </div>
    </div>
</section>
<section class="bg-airtel-red flex flex-col items-center justify-center p-16 text-white">
    <h1 class="text-8xl font-black">{dayCounter}</h1>
    <h2 class="text-xl opacity-80">
        days since Airtel last "resolved" an issue that was actually fixed
    </h2>
    <h3 class="text-sm font-medium opacity-70">(this counter resets daily — optimistically)</h3>
</section>

{#snippet Card({ title, subtitle, body }: CardProps)}
    <div class={["card", "space-y-1 border-r border-b border-white/10 p-8"]}>
        <h1 class="text-airtel-red font-semibold">"{title}"</h1>
        <h2 class="text-xs italic opacity-40">{subtitle}</h2>
        <p class="opacity-80">{body}</p>
    </div>
{/snippet}

<style>
    @reference "tailwindcss";

    .card {
    }
</style>
