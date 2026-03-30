<script lang="ts">
    import { Home, ShowerHead, MailOpenIcon } from "lucide-svelte";
    e;
    import { appstate } from "./state.svelte";
    let sidebarOpen = $derived(appstate.sidebarOpen);
</script>

<section
    class={[
        "overflow-hidden transition-[width] duration-200",
        {
            "w-[10dvw]": !sidebarOpen,
            "w-[25dvw]": sidebarOpen
        },
        "flex flex-col items-center gap-1 px-3"
    ]}
>
    {#if !sidebarOpen}
        {@render SidebarIcon(Home, "Home")}
        {@render SidebarIcon(ShowerHead, "Shorts")}
        {@render SidebarIcon(MailOpenIcon, "Subscriptions")}
    {:else}
        {@render SidebarIcon(Home, "Home")}
        {@render SidebarIcon(ShowerHead, "Shorts")}
        {@render Divider()}
        <div>
            <p>Subscriptions ></p>
        </div>
        {@render Divider()}
    {/if}
</section>

{#snippet Divider()}
    <div class="w-full border-t border-stone-700"></div>
{/snippet}

{#snippet SubscriptionIcon(label: string, isActive: boolean)}
    <li></li>
{/snippet}

{#snippet SidebarIcon(LIcon: typeof Home, label: string)}
    <div class={["sidebarButton", sidebarOpen && "open"]}>
        {#if sidebarOpen}
            <LIcon class="mr-4 size-6 " />
        {:else}
            <LIcon class="size-7" />
        {/if}
        <p class={[!sidebarOpen && "text-xs", sidebarOpen && "text-sm"]}>{label}</p>
    </div>
{/snippet}

<style lang="postcss">
    @reference "tailwindcss";
    .sidebarButton {
        @apply flex w-full flex-col items-center justify-center text-center;
        @apply cursor-pointer rounded-xl p-2 px-2;
        &:hover {
            background-color: var(--color-hover);
        }
        @apply flex-row justify-start;
    }
</style>
