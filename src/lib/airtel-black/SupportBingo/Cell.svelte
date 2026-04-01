<script lang="ts">
    import { Labels } from "./SupportBingo.svelte";
    type Props = {
        row: number;
        col: number;
    };

    let { col, row }: Props = $props();
    import { bingo } from "./BingoLogic.svelte";

    let active = $derived(bingo.get(row, col));
    let label = $derived(Labels[row][col]);
    let isCenter = $derived(row === col && row == 2);
</script>

<button
    class={[
        "size-34 border border-white/4 bg-[#292929]",
        "grid place-items-center text-xs font-semibold  transition-colors duration-200",
        active && "bg-airtel-red font-black text-white transition-all duration-300",
        !active && "hover:bg-airtel-red/10",
        isCenter ? "cursor-not-allowed" : "cursor-pointer",
    ]}
    onclick={() => {
        bingo.toggle(row, col);
    }}
>
    <span class={[!active && "opacity-65"]}>
        {label}
    </span>
</button>
