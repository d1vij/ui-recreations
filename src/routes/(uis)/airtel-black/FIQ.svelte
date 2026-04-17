<script lang="ts">
    type FIQ = {
        title: string;
        body: string;
    };

    const fiqs: FIQ[] = [
        {
            title: "Why was my ticket closed without fixing the issue?",
            body: "Because the ticket and the issue are two separate entities in Airtel's universe. The ticket has a lifecycle. The Issue has a lifecycle. They are not required to intersect. Think of it like a marriage in a Bollywood movie — they exist in parallel but rarely in the same room. Airtel's KPIs track ticket closures, not problem resolutions. From a metrics standpouint, you've been served excellently. From a reality standpoint, you have our thoughts and prayers.",
        },
        {
            title: "Why was my ticket closed without fixing the issue?",
            body: "Because the ticket and the issue are two separate entities in Airtel's universe. The ticket has a lifecycle. The Issue has a lifecycle. They are not required to intersect. Think of it like a marriage in a Bollywood movie — they exist in parallel but rarely in the same room. Airtel's KPIs track ticket closures, not problem resolutions. From a metrics standpouint, you've been served excellently. From a reality standpoint, you have our thoughts and prayers.",
        },
        {
            title: "Why was my ticket closed without fixing the issue?",
            body: "Because the ticket and the issue are two separate entities in Airtel's universe. The ticket has a lifecycle. The Issue has a lifecycle. They are not required to intersect. Think of it like a marriage in a Bollywood movie — they exist in parallel but rarely in the same room. Airtel's KPIs track ticket closures, not problem resolutions. From a metrics standpouint, you've been served excellently. From a reality standpoint, you have our thoughts and prayers.",
        },
    ];
    let openIdx = $state<number | null>(null);
</script>

<section id="FIQs" class={["p-25 px-8", "bg-airtel-black"]}>
    <div class="mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">
            frequently asked questions
        </h2>
        <div
            class="mx-auto mt-4 mb-5 flex max-w-140 flex-col items-center text-center text-4xl font-black text-white"
        >
            <h1>FIQs — Because FAQ</h1>
            <h1>Implies Someone Answers.</h1>
        </div>

        <!-- FIQs -->
        <div class="p-8">
            {#each fiqs as fiq, idx (idx)}
                {@const open = idx === openIdx}
                <!-- giving them the same name ensures that only one remains open at any given time -->
                <div
                    class={[
                        "accordion",
                        "p-6 px-0 ",
                        "border-b border-white/6",
                        "transition-all",
                        open && "max-h-500 before:rotate-45",
                    ]}
                >
                    <button
                        class="w-full text-left"
                        onclick={() => {
                            openIdx = open ? null : idx;
                        }}
                    >
                        <h1 class="max-w-[90%] cursor-pointer text-lg font-semibold text-white">
                            {fiq.title}
                        </h1>
                    </button>
                    <p class={["pt-4 text-sm leading-6", open ? "" : "max-h-0 overflow-hidden"]}>
                        {fiq.body}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="postcss">
    @reference "tailwindcss";
    .accordion {
        position: relative;
        &:before {
            content: "＋";
            position: absolute;
            right: 0;
            color: var(--color-airtel-red);
            @apply text-sm font-semibold transition-all duration-300;
        }
    }
</style>
