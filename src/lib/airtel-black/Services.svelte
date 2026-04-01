<script lang="ts">
    import type { LabelProps } from "$lib/airtel-black/Label.svelte";
    import Label from "$lib/airtel-black/Label.svelte";
</script>

{#snippet Card(
    emoji: string,
    title: string,
    body: string,
    color: NonNullable<LabelProps["color"]>,
    labelText: string
)}
    <div
        class={[
            "hover:border-airtel-red/40 hover:bg-airtel-red/10 rounded-2xl border border-[#2e2e2e] bg-[#212121]",
            "space-y-3 p-7",
        ]}
    >
        <h1 class="text-3xl">{emoji}</h1>
        <h2 class="text-xl font-bold text-white">{title}</h2>
        <p class="text-sm">
            {body}
        </p>
        <Label {color}>
            {labelText}
        </Label>
    </div>
{/snippet}

<section id="services" class="bg-airtel-black min-h-dvh">
    <div class="mx-auto max-w-280 p-20 px-8">
        <h1 class="text-airtel-red mb-4 text-sm font-bold uppercase">what we offer</h1>
        <div class="mb-5 text-4xl font-black text-white lg:text-5xl">
            <span>Premium Services,</span>
            <br />
            <span>Premium Neglect.</span>
        </div>
        <p class="max-w-[60%] text-lg">
            Airtel doesn't just provide connectivity. They provide a full emotional journey — from
            hope to despair, all for a premium price. Think of it as therapy, except your therapist
            keeps insisting you're fine while your house is on fire.
        </p>

        <!-- Cards -->
        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {@render Card(
                "🎫",
                "Ticket Roulette",
                "Every complaint generates a shiny new SR number! Collect them all like Pokémon cards, except instead of battling, they just sit there doing nothing — much like Airtel's backend team.",
                "green",
                "auto-resolved"
            )}
            {@render Card(
                "🔧",
                "Field Engineer Visits",
                "A technician will arrive, open a browser, confirm google.com loads, declare victory, and leave. Bridge mode? Static IP? Never heard of it.",
                "red",
                "premium feature"
            )}
            {@render Card(
                "📱",
                "The Airtel Thanks App",
                "Report issues through an app that thanks you for reporting them. Then watch your complaint vanish into a digital void. The app is called \"Airtel Thanks\" because the onlyt thing you'' get is thanks. Not a fix. Just thanks. You're welcome.",
                "green",
                "5-start experience"
            )}
            {@render Card(
                "🤖",
                "IVR Meditation",
                "Spend 20 minutes navigating an automated phone system, press 47 buttons, get disconnected, and achieve a zen-like acceptance of your fate.",
                "red",
                "mindfullness"
            )}
            {@render Card(
                "💬",
                "Scripted Empathy",
                '"I understand your frustration, sir." Repeated 14 times per call with the emotional depth of a parking meter. No understanding was achieved. No frustration was addressed. But the script was followed, and that\'s what really matters.',
                "green",
                "emotionally available"
            )}
            {@render Card(
                "📊",
                "100% Resolution Rate",
                "Every ticket is marked resolved within 48 hours. The issue persists, but the ticket is closed. KPIs hit. Bonuses earned. Somewhere a manager gets a pat on the back while your router weeps in NAT mode. The system works perfectly — for Airtel.",
                "red",
                "award winning"
            )}
        </div>
    </div>
</section>
<section class="bg-airtel-red h-60 p-16 text-center">
    <div class="text-3xl text-white">
        <p>"I admire the optimism.</p>
        <p>Unfortunately, <span class="text-airtel-red">optimism does not route packets.</span>"</p>
    </div>
    <p class="mt-6 text-sm">
        — An actual customer email to Airtel, after 21 days of "resolved" tickets
    </p>
</section>
