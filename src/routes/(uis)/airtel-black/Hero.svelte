<script lang="ts">
    import Label from "./Label.svelte";

    const stats: { count: string; title: string }[] = [
        { count: "3", title: "srs generated" },
        { count: "0", title: "problems actually fixed" },
        { count: "21+", title: 'days of "patience"' },
        { count: "30+", title: "stores just like this" },
        { count: "∞", title: "hollow promises made" },
    ];
</script>

<section class={["hero"]}>
    <div
        class="mx-auto flex min-h-dvh max-w-210 flex-col items-center justify-center gap-8 px-2 pt-10 pb-12 text-center md:pt-10"
    >
        <Label class="" color="red" outline>★★★★★ A Premium Customer Experience ★★★★★</Label>
        <!-- <div class="text-[10dvw] md:text-8xl"> -->
        <div class="text-[clamp(--spacing(4),10dvw,--spacing(24))]">
            <h1 class="font-black tracking-tighter text-white">Your issue has been</h1>
            <span class="text-nowrap"
                ><span class="text-white/50 line-through">resolved</span>
                <span class="text-airtel-red font-black">ignored.</span></span
            >
        </div>
        <p class="max-w-150 text-sm md:text-xl">
            Welcome to Airtel Blackout — a love letter to India's most profitable telecom, where the
            only thing faster than your "up to 1 Gbps" connection is the speed at which they close
            your tickets without reading them.
        </p>

        <div class="flex w-full flex-wrap justify-center gap-12 md:flex-nowrap">
            {#each stats as { count, title } (title)}
                <div class="grid">
                    <div class="text-airtel-red text-3xl font-black md:text-6xl">
                        {count}
                    </div>
                    <div class="w-[16ch] text-center text-sm uppercase md:text-sm">
                        {title}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Marqueee -->
<section class={["w-full overflow-clip bg-[#b71c1c] font-semibold text-white"]}>
    <div class={["marquee", "flex flex-nowrap gap-20 p-1"]}>
        {#each Array(2)}
            <span>YOUR ISSUE HAS BEEN RESOLVED ✓</span>
            <span>PLEASE REPLY 1 IF SATISFIED, 2 IF YOU ENJOY SUFFERING</span>
            <span>OUR ENGINEER WILL VISIT SHORTLY (SHORTLY = BETWEEN NOW AND NEVER)</span>
            <span>WE VALUE YOUR FEEDBACK (WE DO NOT VALUE YOUR TIME)</span>
            <span>YOUR ISSUE HAS BEEN RESOLVED ✓ (NO IT HASN'T)</span>
            <span>HAVE YOU TRIED RESTARTING YOUR ENTIRE LIFE?</span>
            <span>PLEASE CLEAR YOUR BROWSER CACHE, YOUR HOPES, AND YOUR EXPECTATIONS</span>
            <span>THIS IS A KNOWN ISSUE (WE JUST DON'T CARE ENOUGH TO FIX IT)</span>
            <span>YOUR CALL IS IMPORTANT TO US (LOL)</span>
            <span>BILLING IS WORKING FINE THOUGH — THAT NEVER BREAKS</span>
            <span>YOUR ISSUE HAS BEEN RESOLVED ✓</span>
            <span>PLEASE REPLY 1 IF SATISFIED, 2 IF YOU ENJOY SUFFERING</span>
            <span>OUR ENGINEER WILL VISIT SHORTLY (SHORTLY = BETWEEN NOW AND NEVER)</span>
            <span>WE VALUE YOUR FEEDBACK (WE DO NOT VALUE YOUR TIME)</span>
            <span>YOUR ISSUE HAS BEEN RESOLVED ✓ (NO IT HASN'T)</span>
            <span>HAVE YOU TRIED RESTARTING YOUR ENTIRE LIFE?</span>
            <span>PLEASE CLEAR YOUR BROWSER CACHE, YOUR HOPES, AND YOUR EXPECTATIONS</span>
            <span>THIS IS A KNOWN ISSUE (WE JUST DON'T CARE ENOUGH TO FIX IT)</span>
            <span>YOUR CALL IS IMPORTANT TO US (LOL)</span>
            <span>BILLING IS WORKING FINE THOUGH — THAT NEVER BREAKS</span>
        {/each}
    </div>
</section>

<style lang="scss">
    @keyframes marquee {
        0% {
            transform: translate(0%);
        }
        100% {
            transform: translate(-100%);
        }
    }

    .marquee {
        animation: marquee 30s infinite forwards linear;
        span {
            text-wrap: nowrap;
            text-transform: uppercase;
        }
    }

    .hero {
        background: linear-gradient(
            135deg,
            var(--color-airtel-black) 0%,
            #2a0a0a 50%,
            var(--color-airtel-black) 100%
        );
    }
</style>
