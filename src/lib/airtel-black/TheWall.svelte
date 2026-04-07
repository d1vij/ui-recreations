<script lang="ts" module>
    const MAX_STARS = 5;
</script>

<script lang="ts">
    import { title as titleCase } from "radashi";
    import Label from "$lib/airtel-black/Label.svelte";
</script>

{#snippet TestimonyCard(title: string, body: string, device: string, stars: number)}
    <div class="border-airtel-red space-y-4 rounded-xl border-l-4 bg-white p-7 shadow-xs">
        <h1 class="text-airtel-red text-sm font-semibold uppercase">{title}</h1>
        <p>"{body}"</p>
        <div class="flex justify-between text-xs">
            <span class="font-medium text-[#9E9E9E]">
                {titleCase(device)} Customer
            </span>
            <span class="text-airtel-red flex font-black">
                {#if stars > MAX_STARS}
                    INVALID STAR COUNT
                {:else}
                    Common:
                    <span class="pl-1">
                        {#each Array(stars)}★{/each}
                    </span>
                    <span>
                        {#each Array(MAX_STARS - stars)}☆{/each}
                    </span>
                {/if}
            </span>
        </div>
    </div>
{/snippet}

<section id="the-wall" class={["p-25 px-8", "text-airtel-black bg-[#f5f5f5]"]}>
    <div class="mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">
            the wall of fame
        </h2>
        <div class="mt-4 mb-5 text-4xl font-black">
            <h1 class="">Things Airtel Customers</h1>
            <h1>Have Heard Before.</h1>
        </div>
        <p class="text-lg md:max-w-[60%]">
            A curated collection of Airtel's greatest hits — real complaints, real patterns, real
            pain.
        </p>

        <!-- Testimonies -->
        <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {@render TestimonyCard(
                "phantom resolution",
                "My complaint was marked resolved while I was literally on the phone explaining that it wasn't resolved.",
                "broadband",
                5
            )}
            {@render TestimonyCard(
                "The Eternal Transfer",
                "Transferred 6 times in one call. Each agent asked me to explain the issue from scratch. By the 6th, I could recite my account number in my sleep.",
                "prepaid",
                5
            )}
            {@render TestimonyCard(
                "the suprise deduction",
                "Recharged ₹299 plan. Got charged ₹299 + ₹49 'convenience fee' + ₹35 for a 'content pack' I never subscribed to. Airtel Math™.",
                "mobile",
                4
            )}
            {@render TestimonyCard(
                "engineer safari",
                "Engineer said he'd come between 10-12. Showed up at 5pm. Looked at the router. Said 'server issue.' Left. Issue still exists 2 weeks later.",
                "broadband",
                5
            )}
            {@render TestimonyCard(
                "the port block",
                "Paying for a static IP and bridge mode. All non-standard ports blocked. When asked, support said 'Sir, ports are not supported on your plan.' I'm on the enterprise plan.",
                "business",
                4
            )}
            {@render TestimonyCard(
                'Speed "Up To"',
                "Paying for 200 Mbps. Getting 23 Mbps. Support says 'up to 200 Mbps.' By that logic, I'm paying up to ₹0.",
                "broadband",
                5
            )}
            {@render TestimonyCard(
                "retension gymnastics",
                "Tried to cancel. Was transferred to 'retention.' They offered me the same plan at the same price and called it a 'special loyalty offer.' I felt so special.",
                "DTH",
                4
            )}
            {@render TestimonyCard(
                "the callback that never comes",
                "'Our senior team will call you back within 24 hours.' It's been 11 days. I think the senior team is still looking for my file in a parallel universe.",
                "postpaid",
                5
            )}
            {@render TestimonyCard(
                "data vanishing act",
                "Had 15GB remaining at night. Woke up to 0GB. Airtel says 'system shows full usage'. My phone was on airplane mode. The system is lying.",
                "mobile",
                4
            )}
        </div>
    </div>
</section>

{#snippet ReviewCard(body: string, user: string, description: string)}
    <div class="text-airtel-black rounded-2xl bg-white p-4 pr-4 pl-7">
        <div class="mb-4">
            <Label color="red" class="ml-auto pt-0.5! pb-0.5! text-[10px] font-bold!"
                >verified sufferer</Label
            >
            <span class="text-[#ffc107]">★★★★★</span>
        </div>
        <p class="mb-4 italic">
            "{body}"
        </p>
        <h2 class="text-sm font-bold">{user}</h2>
        <h3 class="text-xs text-[#9E9E9E]">{description}</h3>
    </div>
{/snippet}

<section class="bg-airtel-black p-25 px-8">
    <div class="mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">customer love</h2>
        <div class="mt-4 mb-5 text-4xl font-black text-white">
            <h1>★★★★★ Reviews</h1>
            <h1>Airtel Wishes Were Real.</h1>
        </div>
        <p class="text-lg md:max-w-[60%]">
            What customers would say if they were as delusional as Airtel's ticket system.
        </p>

        <!-- Cards -->
        <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {@render ReviewCard(
                "Airtel taught me that patience is a virtue, helplessness is a lifestyle, and 'resolved' is a state of mind rather than a state of my internet connection. 10/10 spiritual experience.",
                "Rohit K.",
                "Has memorized Airtel's IVR menu by heart"
            )}
            {@render ReviewCard(
                "My complaint was resolved 4 times! I didn't even know you could resolve something that many times without fixing it once. That takes genuine institutional commitment to not giving a damn.",
                "Priya S.",
                "Considered switching to two tin cans and a string"
            )}
            {@render ReviewCard(
                "I pay ₹3,999/month for a 1 Gbps plan. I get 40 Mbps on a good day. On the bright side, Airtel has given me plenty of free time while pages load — I've taken up knitting. I've made three scarves this month.",
                "Arjun M.",
                "Now runs a small knitwear business, thanks Airtel"
            )}
            {@render ReviewCard(
                "The engineer came, looked at my router like it was an alien artifact, asked me what 'bridge mode' means, wrote 'customer educated' in his report, and left. I was charged ₹200 for the visit. For educating him.",
                "Meera T.",
                "Unpaid Airtel technical trainer"
            )}
            {@render ReviewCard(
                "Airtel's support team told me my static IP not working was 'expected behavior.' Expected by whom? Certainly not by me, the person paying for it. Perhaps by God, as a test of faith.",
                "Vikram D.",
                "Now questions the existance of reliable infrastructure"
            )}
            {@render ReviewCard(
                "I called support 11 times about the same issue. On the 11th call, the agent said 'I see you've called before about this.' BEFORE? It's practically my second job at this point. I should be on payroll.",
                "Sneha R.",
                "Part-time customer, full-time complainant"
            )}
        </div>
    </div>
</section>

<section class="p-25 px-8">
    <div class="text-airtel-black mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">customer love</h2>
        <div class="mt-4 mb-5 text-4xl font-black">
            <h1>Airtel: What You Pay For</h1>
            <h1>vs. What You Get.</h1>
        </div>
        <p class="text-lg md:max-w-[60%]">
            A side-by-side comparision that Airtel's marketing team hopes you never see.
        </p>

        <table class="feat-table mt-4 w-full overflow-clip rounded-2xl">
            <thead class="">
                <tr class="bg-airtel-red overflow-clip text-sm text-white uppercase">
                    <th class=""> feature </th>
                    <th> what you're promised </th>
                    <th> what you actually get </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Speed </td>
                    <td> "Up to 1 Gbps" </td>
                    <td> Up to 1 Gbps (where "up to" includes 0 Mbps)</td>
                </tr>
                <tr>
                    <td> Uptime</td>
                    <td> 99.9% SLA</td>
                    <td> 99.9% — if you don't count the times it's down</td>
                </tr>
                <tr>
                    <td> Static IP</td>
                    <td> Dedicated public IP address</td>
                    <td>A public IP that works until Airtel decides it shouldn't</td>
                </tr>
                <tr>
                    <td>Bridge Mode</td>
                    <td>Direct WAN access for your router</td>
                    <td>LOL</td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>24/7 priority customer care</td>
                    <td>24/7 IVR meditation, followed by scripted empathy</td>
                </tr>
                <tr>
                    <td>Resolution Time</td>
                    <td>48 hours</td>
                    <td>48 hours to close the ticket. ∞ to fix the problem.</td>
                </tr>
                <tr>
                    <td>Engineer Visit</td>
                    <td>Expert technical diagnosis</td>
                    <td>A man with a phone who will google your problem</td>
                </tr>
                <tr>
                    <td>Billing</td>
                    <td>Transparent, accurate charges</td>
                    <td
                        ><span class="font-semibold text-[#4CAF50]">✓ Always works perfectly</span> (suspicious,
                        isn't it?)</td
                    >
                </tr>
            </tbody>
        </table>
    </div>
</section>

<style lang="postcss">
    @reference "tailwindcss";
    .feat-table {
        th {
            @apply p-1 pl-6 text-left md:p-3;
        }
        tbody {
            color: white;
            tr {
                &:nth-child(even) {
                    background-color: #1e1e1e;
                }
                &:nth-child(odd) {
                    background-color: #1a1a1a;
                }

                td {
                    &:first-child {
                        @apply font-semibold text-white;
                    }
                    @apply p-3 pl-4 text-xs font-medium text-white/65 md:pl-6 md:text-sm;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
            }
        }
    }
</style>
