<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Pathname } from "$app/types";
    import { slide } from "svelte/transition";

    import { DocumentTitle } from "./Contexts.svelte";
    import { sineOut } from "svelte/easing";
    const { children } = $props();

    let sidebarOpen = $state(false);
    DocumentTitle.set("Home");
</script>

<svelte:head>
    <title>Components | {DocumentTitle.get()}</title>
</svelte:head>

<svelte:body
    onclick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".sidebar-interest")) {
            sidebarOpen = false;
        }
    }}
/>

<div data-sveltekit-replacestate class={["bg-teal-100", "absolute inset-0"]}>
    {#if sidebarOpen}
        <div class="sidebar-interest absolute top-0 w-full px-10">
            <aside
                in:slide={{ axis: "y", duration: 300, delay: 300, easing: sineOut }}
                out:slide={{ axis: "y", duration: 500, easing: sineOut }}
                class={[
                    "min-h-[50dvh] w-full bg-teal-500",
                    "shadow shadow-teal-950/40",
                    "rounded-b-4xl",
                ]}
            >
                {#snippet Link(href: Pathname, title: string)}
                    <a href={resolve(href)} type="button">
                        {title}
                    </a>
                {/snippet}
                <nav>
                    {@render Link("/components/Sample", "Sample")}
                </nav>
            </aside>
        </div>
    {:else}
        <!-- sidebar toggle -->
        <button
            in:slide={{ axis: "y", delay: 500, duration: 100, easing: sineOut }}
            out:slide={{ axis: "y", duration: 300, easing: sineOut }}
            class={[
                "sidebar-interest toggle-button",
                "absolute top-0 left-10 cursor-pointer rounded-b-lg bg-teal-500 px-4 py-1 hover:brightness-80",
            ]}
            onclick={() => (sidebarOpen = !sidebarOpen)}>{DocumentTitle.get()}</button
        >
    {/if}
</div>

{@render children()}

<style lang="postcss">
</style>
