<script lang="ts" module>
    export const Labels: BingoGrid<string> = [
        [
            "Have you tried restarting",
            "Call drops mid-complaint",
            "Transferred 3+ times",
            '"Server issue in your area"',
            'SMS says "Resolved"',
        ],
        [
            "Wrong department",
            "Engineer no-show",
            '"Please wait 24-48 hours"',
            "Asked to explain issue again",
            '"I understand your frustation"',
        ],
        [
            "Offered irrelevant upsell",
            "Hold music for 10+ min",
            "FREE SPACE (issue not fixed)",
            "Our team will call back",
            "Suprise charge on bill",
        ],
        [
            "Speed test ≠ promised speed",
            "App shows wrong data",
            '"Let me check the system"',
            "Same script, different agent",
            "Told to visit Airtel store",
        ],
        [
            '"This is a one-time issue"',
            "Complaint closed without call",
            "IVR loop of doom",
            '"Please rate us 5 stars"',
            "They blame your device",
        ],
    ];
</script>

<script lang="ts">
    import Cell from "./Cell.svelte";
    import { type BingoGrid } from "./BingoLogic.svelte";
    import { range } from "radashi";
    import { bingo } from "./BingoLogic.svelte";

    let won = $state(false);
    $effect(() => {
        if (bingo.rowCount !== bingo.colCount) {
            throw new Error("Only square grids supported");
        }

        const size = bingo.rowCount;

        for (let i = 0; i < size; i++) {
            let rowWin = true;
            let colWin = true;

            for (let j = 0; j < size; j++) {
                if (!bingo.grid[i][j]) rowWin = false;
                if (!bingo.grid[j][i]) colWin = false;
                if (!rowWin && !colWin) break;
            }

            if (rowWin || colWin) {
                won = true;
                return;
            }
        }

        let diag1Win = true;
        let diag2Win = true;

        for (let i = 0; i < size; i++) {
            if (!bingo.grid[i][i]) diag1Win = false;
            if (!bingo.grid[i][size - i - 1]) diag2Win = false;

            if (!diag1Win && !diag2Win) break;
        }

        if (diag1Win || diag2Win) {
            won = true;
            return;
        }
    });
</script>

<section id="case-study" class={["p-25 px-8", "bg-airtel-black"]}>
    <div class="mx-auto max-w-275">
        <h2 class="text-airtel-red text-sm font-black tracking-widest uppercase">case study</h2>
        <div
            class="mx-auto mt-4 mb-5 flex w-full max-w-140 flex-col items-center gap-6 text-center text-white"
        >
            <h1 class="text-4xl font-black">Airtel Support Bingo</h1>
            <p class="text-lg opacity-65">
                Click the squares as you experience them. Get five in a row and win... absolutely
                nothing. Just like calling Airtel support.
            </p>

            <!-- Bingo -->
            <div
                class="grid size-[clamp(--spacing(50),90dvw,--spacing(150))] grid-cols-5 grid-rows-5 gap-1 overflow-clip rounded-2xl bg-[#252525]"
            >
                {#each range(bingo.rowCount - 1) as row (row)}
                    <div class="row row-span-5 grid grid-cols-subgrid grid-rows-subgrid">
                        {#each range(bingo.colCount - 1) as col (col)}
                            <Cell {row} {col} />
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="mt-8 space-y-4">
        {#if won}
            <div
                class="bg-airtel-red/10 border-airtel-red/30 space-y-2 rounded-2xl border p-6 text-center"
            >
                <h1 class="text-airtel-red text-2xl font-black">🎉 BINGO!</h1>
                <p class="text-sm text-white/70">
                    Congratulations! Your prize is the same as Airtel's resolution: absolutely
                    nothing. But at least this game was honest about it.
                </p>
            </div>
        {/if}
        <p class="text-xs">
            Click squares to stamp them. Try to get 5 in a row — though with Airtel, a full board is
            more likely.
        </p>
    </div>
</section>
