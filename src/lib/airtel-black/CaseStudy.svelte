<script lang="ts">
    import Label, { type LabelProps } from "$lib/airtel-black/Label.svelte";

    type Labels = { color: NonNullable<LabelProps["color"]>; content: string }[];

    type Timeline = {
        date: string;
        title: string;
        body: string;
        labels: Labels;
        resolved: boolean;
    };

    const timelineItems: Timeline[] = [
        {
            date: "February 18, 2026",
            title: "Bridge mode breaks. Static IP goes dark.",
            body: ' Router reverts to standard NAT configuration overnight. Static public IP becomes completely unreachable. Basic internet works — which will prove to be the root cause of every "resolution" that follows.',
            labels: [
                {
                    content: "issue begins",
                    color: "red",
                },
            ],
            resolved: false,
        },
        {
            date: "February 26, 2026 — SR 11025807769",
            title: 'First ticket closed as "Resolved"',
            body: 'A field engineer reportedly visited. The diagnostic methodology: open Chrome → type google.com → page loads → "working fine, sir." Bridge mode still broken. Static IP still dead. But hey, YouTube works.',
            labels: [
                { content: "✓ resolved by airtel", color: "green" },
                { content: "✗ actually broken", color: "red" },
            ],
            resolved: true,
        },
        {
            date: "March 1, 2026 — SR 11025994241",
            title: 'Second ticket closed as "Resolved"',
            body: ' Another SR, another "resolved" SMS. At this point, the customer has explained bridge mode provisioning in more technical detail than Airtel\'s own documentation. The response: "We have resolved your concern." ',
            labels: [
                { content: "✓ resolved by airtel", color: "green" },
                { content: "✗ still broken", color: "red" },
            ],
            resolved: true,
        },
        {
            date: "March 7, 2026 — SR 11026262430",
            title: 'Third ticket closed as "Resolved"',
            body: " SR #3. The hat trick. Router still in NAT mode. Static IP still unreachable. But the ticket system shows green checkmarks across the board. Somewhere, a dashboard celebrates a 100% resolution rate.",
            labels: [
                { content: "✓ resolved by airtel", color: "green" },
                { content: "✗ still broken", color: "red" },
            ],
            resolved: true,
        },
        {
            date: "March 11, 2026 — Day 21",
            title: "Customer writes an email with more sarcasm than a British sitcom",
            body: 'The customer requests: (1) an L2 engineer who knows what bridge mode is, (2) a credit for 21 days of missing service, and (3) a written confirmation — "not an SMS asking me to reply 1 or 2." The email is a masterpiece. Airtel\'s response is pending — possibly forever.',
            labels: [{ content: "21 days. 3 srs. 0 fixes.", color: "red" }],
            resolved: false,
        },
    ];
</script>

<section id="case-study" class={["p-25 px-8", "text-airtel-black"]}>
    <div class="mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">case study</h2>
        <div class="mt-4 mb-5 text-4xl font-black">
            <h1>Anatomy of a</h1>
            <h1>"Resolved" Issue.</h1>
        </div>
        <p class="text-airtel-black max-w-140 text-lg font-light">
            A real timeline of a static IP + bridge mode outage. Three service requests. Three
            "resolutions." Zero fixes. All verifiable.
        </p>

        <!-- Timeline -->
        <div class="timeline mt-8 min-h-dvh space-y-12 p-4 pl-2">
            {#each timelineItems as { body, date, labels, resolved, title } (title)}
                <div class={["timeline-item space-y-1 pl-9", resolved ? "resolved" : "unresolved"]}>
                    <h2 class="text-airtel-red text-sm font-bold">{date}</h2>
                    <h1 class="text-lg font-bold">{title}</h1>
                    <p>
                        {body}
                    </p>

                    <div class="mt-3 flex gap-2">
                        {#each labels as label (label.content)}
                            <Label color={label.color}>
                                {label.content}
                            </Label>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="postcss">
    @reference "tailwindcss";
    .timeline {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            background: linear-gradient(to bottom, var(--color-airtel-red), rgba(237, 28, 36, 0.1));
            width: 2px;
            top: 0;
            bottom: 0;
        }
    }

    .timeline-item {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            @apply size-4 rounded-4xl;
            top: --spacing(1.5);
            left: 0;
            translate: -45%;
        }
        &.unresolved:before {
            background-color: var(--color-airtel-red);
        }
        &.resolved:before {
            background-color: #4caf50;
        }
    }
</style>
