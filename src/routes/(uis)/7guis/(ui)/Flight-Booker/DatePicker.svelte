<script lang="ts" module>
    import { SvelteDate } from "svelte/reactivity";

    export type DatePickerProps = {
        date: SvelteDate;
        enabled: boolean;
    };
</script>

<script lang="ts">
    import { range } from "radashi";

    let { date = $bindable(), enabled }: DatePickerProps = $props();
    const dateFmt = Intl.DateTimeFormat(undefined, { dateStyle: "medium" });

    let ref = $state<HTMLDivElement>();
    let id = $props.id();

    let year = $state(date.getFullYear());
    let month = $state(date.getMonth());
    let day = $state(date.getDate() - 1);

    // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
    let daysInMonth = $derived(new Date(year, month + 1, 0).getDate());
    $effect(() => {
        if (day > daysInMonth) {
            day = daysInMonth;
        }
    });
</script>

<button
    popovertarget={enabled ? id : ""}
    style:--anchor-name={`--picker-${id}`}
    class={[
        "picker",
        "rounded px-2 py-1",
        enabled ? "cursor-pointer bg-mauve-300" : "cursor-not-allowed bg-mauve-500 opacity-70",
    ]}
>
    {dateFmt.format(date)}
</button>
<div
    popover
    class={["modal", "rounded border border-mauve-500 bg-mauve-500/50 p-2 backdrop-blur-sm"]}
    style:--anchor-name={`--picker-${id}`}
    {id}
    bind:this={ref}
>
    <div class="space-y-2">
        <div>
            <select name="year" bind:value={year}>
                {#each range(1900, new Date().getFullYear()) as yr (yr)}
                    <option value={yr}>
                        {yr}
                    </option>
                {/each}
            </select>

            <select name="month" bind:value={month}>
                {#each ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as mth, idx (mth)}
                    <option value={idx}>
                        {mth}
                    </option>
                {/each}
            </select>
        </div>

        <div class="grid grid-cols-7 gap-1 text-mauve-100">
            {#each range(daysInMonth - 1) as d (d)}
                {@const selected = d === day}
                <button
                    onclick={() => {
                        day = d;
                    }}
                    class={[
                        "cursor-pointer rounded border border-mauve-600 p-0.5",
                        selected ? "bg-mauve-600" : "bg-mauve-500",
                    ]}
                >
                    {d + 1}
                </button>
            {/each}
        </div>

        <button
            onclick={() => {
                date.setTime(new Date(year, month, day + 1).getTime());
                ref?.hidePopover();
            }}
            class="cursor-pointer rounded bg-mauve-500 px-2 py-1"
        >
            Save
        </button>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .picker {
        position: relative;
        anchor-name: var(--anchor-name);
    }
    .modal {
        position-anchor: var(--anchor-name);
        top: calc(anchor(bottom) + --spacing(1));
        left: anchor(left);
    }
</style>
