<script lang="ts" module>
    import { createHoverGroup } from "@d1vij/shit-i-always-use/svelte";
    export const sidebarNode = createHoverGroup({ triggerDuration: 500 });
</script>

<script lang="ts">
    import { Moon, Sun, Folder, Focus, Layers2, Box } from "@lucide/svelte";

    import SidebarIcon from "./SidebarIcon.svelte";
    import HoverTitle from "./HoverTitle.svelte";

    let theme = $state<"light" | "dark">("light");
    let open = $state(false);
    // open = true;

    const sidebarToggleNode = sidebarNode();
</script>

<main class={["absolute inset-0 bg-[#a9a5a6]", theme]}>
    <!-- theme toggler -->
    <div class="absolute top-2 right-2">
        <button
            onclick={() => (theme = theme === "dark" ? "light" : "dark")}
            class="cursor-pointer rounded-full bg-neutral-300 p-2 shadow transition-shadow duration-300 hover:shadow-lg"
        >
            {#if theme === "dark"}
                <Moon class="stroke-neutral-500" />
            {:else}
                <Sun class="stroke-neutral-500" />
            {/if}
        </button>
    </div>
    <div class="absolute top-20 right-2">
        <button
            onclick={() => (open = !open)}
            class="cursor-pointer rounded-full bg-neutral-300 p-2 shadow transition-shadow duration-300 hover:shadow-lg"
        >
            {#if open}
                Close
            {:else}
                Open
            {/if}
        </button>
    </div>

    <div class="grid h-full grid-cols-[auto_1fr]">
        <div class="relative h-full w-20 p-2">
            <!-- Sidebar -->
            <aside
                class={[
                    "relative",
                    "bg-white dark:bg-[#0a0a0a]",
                    "rounded-l-md rounded-r-2xl p-2",
                    "h-full",
                    open ? "w-[90dvw] md:w-[20dvw]" : "w-14",
                    "transition-all duration-300 ease-out",
                    // "overflow-clip",
                    "flex gap-2",
                    // "grid grid-cols-[auto_1fr]",
                ]}
            >
                <!-- buttons -->
                <div class={["h-full", "flex flex-col items-center pt-4 pl-1"]}>
                    <button
                        class="relative cursor-pointer"
                        onclick={() => (open = !open)}
                        {@attach sidebarToggleNode.attachment}
                    >
                        <Box
                            class="size-8 transition-all duration-100 hover:scale-105 active:scale-95"
                        />

                        {#if sidebarToggleNode.isHovering}
                            <HoverTitle content="Toggle" />
                        {/if}
                    </button>
                    <ul class="mt-4">
                        <SidebarIcon icon={Focus} hoverTitle="Focus" />
                        <SidebarIcon icon={Folder} hoverTitle="Files" />
                        <SidebarIcon icon={Layers2} hoverTitle="Layers" />
                    </ul>
                </div>
                <div
                    class={[
                        !open && "opacity-0",
                        "  overflow-clip bg-[#f3f5f7] dark:bg-[#0a0a0a]",
                        "outline outline-[#ebedef] dark:outline-[#1c1c1c]",
                        "inset-shadow-sm inset-shadow-neutral-200/40",
                        "rounded-l-md rounded-r-xl",
                        "transition-all duration-200",
                    ]}
                >
                    {#if open}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                        reiciendis officia totam inventore accusantium porro ut rem quo! Placeat,
                        accusamus beatae tempora sequi voluptatum consequuntur mollitia eos aperiam
                        deleniti neque.
                    {/if}
                </div>
            </aside>
        </div>
        <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis saepe quae
            impedit quibusdam dolorem ea quo iusto nostrum incidunt officiis aliquid recusandae
            eligendi reprehenderit, quidem quam voluptatum alias tempora!
        </article>
    </div>
</main>

<style lang="postcss">
    @import "tailwindcss";
    @custom-variant dark (&:where(.dark, .dark *));
</style>
