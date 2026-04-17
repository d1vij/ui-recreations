<script lang="ts" module>
    const DateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const datePattern = DateRegex.source;
</script>

<script lang="ts">
    import { SvelteDate } from "svelte/reactivity";
    const dateFmt = Intl.DateTimeFormat(undefined, { dateStyle: "short" });

    import DatePicker from "./DatePicker.svelte";
    let direction = $state<"one-way" | "two-way">("one-way");

    let goingDate = $state("");
    let comingDate = $state("");

    let date = new SvelteDate();
</script>

<svelte:head>
    <title>7guis | Flight Booker</title>
</svelte:head>

<div class="base-container h-30 w-60 bg-mauve-400">
    <select
        bind:value={direction}
        class="cursor-pointer rounded bg-mauve-300 p-2 shadow shadow-mauve-800/20"
    >
        <option value="one-way">One-Way Flight</option>
        <option value="two-way">Return Flight</option>
    </select>

    <DatePicker {date} />

    <div>
        {dateFmt.format(date)}
    </div>
    <!-- <input type="text" placeholder="dd/mm/yyyy" pattern={datePattern} bind:value={goingDate} />
    <input type="text" placeholder="dd/mm/yyyy" pattern={datePattern} bind:value={comingDate} /> -->
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .base-container {
        @apply rounded-md border border-mauve-600/20 p-2 shadow-xs shadow-mauve-700/40;
    }
</style>
