<script lang="ts">
    import { Search } from "lucide-svelte";
    let inputRef = $state<HTMLInputElement>();
    let inputValue = $state("");
    let isFocused = $state(false);
</script>

<label class={["overflow-clip", "w-1/3", "grid grid-cols-[1fr_auto] "]}>
    <div
        class={[
            "rounded-l-3xl border border-secondary px-1",
            "focus-within:border-blue-300",
            "grid grid-cols-[auto_1fr] place-content-center place-items-center"
        ]}
    >
        <div class="flex items-center justify-end p-2">
            {#if isFocused}
                <Search />
            {/if}
            <input
                type="text"
                bind:value={inputValue}
                class={["w-full overflow-x-scroll focus:outline-none"]}
                bind:this={inputRef}
                onfocus={() => (isFocused = true)}
                onblur={() => (isFocused = false)}
                placeholder="Search"
            />
        </div>
    </div>
    <button
        class={[
            "grid size-full cursor-pointer content-center px-4",
            "bg-secondary",
            "rounded-r-3xl border border-secondary"
        ]}
    >
        <Search class="size-" />
    </button>
</label>
