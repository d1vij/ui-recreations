<script lang="ts" module>
    import type { LucideIcon } from "@lucide/svelte";

    export type SidebarIconProps = {
        icon: LucideIcon;
        hoverTitle: string;
    };
</script>

<script lang="ts">
    import HoverTitle from "./HoverTitle.svelte";
    import { sidebarNode } from "./App.svelte";

    const { icon: Icon, hoverTitle }: SidebarIconProps = $props();
    const node = sidebarNode();
</script>

<div class="relative w-full">
    <!-- {hover.isHovering} -->
    <button
        type="button"
        class={["cursor-pointer  p-1 hover:bg-[#f4f6f8]", "transition duration-300"]}
        {@attach node.attachment}
    >
        <Icon class="stroke-neutral-800" />
    </button>
    {#if node.isHovering}
        <HoverTitle content={hoverTitle} />
    {/if}
</div>
