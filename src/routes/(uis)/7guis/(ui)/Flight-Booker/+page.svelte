<script lang="ts">
    import { SvelteDate } from "svelte/reactivity";

    import DatePicker from "./DatePicker.svelte";
    import { onMount } from "svelte";
    import { onClickOutsideAttachment } from "@d1vij/shit-i-always-use/svelte";
    let direction = $state<"one-way" | "two-way">("one-way");

    let goingDate = $state(new SvelteDate());
    let comingDate = $state(
        new SvelteDate(goingDate.getFullYear(), goingDate.getMonth(), goingDate.getDate() + 1)
    );

    let showConfirmationPopup = $state(false);
</script>

<svelte:head>
    <title>7guis | Flight Booker</title>
</svelte:head>

<div class="base-container relative bg-mauve-400" style:anchor-name="--flight-booker">
    <select
        bind:value={direction}
        class="cursor-pointer w-full rounded bg-mauve-300 p-2 shadow shadow-mauve-800/20"
    >
        <option value="one-way">One-Way Flight</option>
        <option value="two-way">Return Flight</option>
    </select>

    <div class="dates mt-5 mb-5">
        <label>
            <span>One Way Flight</span>
            <DatePicker date={goingDate} enabled />
        </label>
        <label>
            <span>Two Way Flight</span>
            <DatePicker date={comingDate} enabled={direction === "two-way"} />
        </label>
    </div>
    <div class="flex justify-center">
        <button
            type="button"
            class="w-full cursor-pointer rounded border border-mauve-600 bg-mauve-500 px-2 py-1"
            onclick={() => {
                showConfirmationPopup = true;
            }}>Submit</button
        >
        <!-- confirmation popup -->
        {#if showConfirmationPopup}
            <div
                class={[
                    "absolute inset-0 grid size-full place-items-center",
                    "bg-white/10 backdrop-blur-xs",
                ]}
            >
                <div
                    class="rounded-md bg-mauve-500 p-4 text-lg text-mauve-100 shadow shadow-mauve-800/30"
                    {@attach onClickOutsideAttachment(() => {
                        showConfirmationPopup = false;
                    })}
                >
                    {#if direction === "one-way"}
                        <span>Booked a One way flight on {goingDate.toDateString()}</span>
                    {:else}
                        <span
                            >Booked a One way flight on {goingDate.toDateString()} with returning flight
                            on {comingDate.toDateString()}</span
                        >
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .base-container {
        @apply rounded-md border border-mauve-600/20 p-2 shadow-xs shadow-mauve-700/40;
    }
    .dates {
        @apply space-y-2;
        label {
            @apply flex items-center gap-2 rounded p-1;
            @apply hover:bg-mauve-500/10;
            > span {
                @apply text-sm font-medium text-mauve-700;
            }
        }
    }
</style>
