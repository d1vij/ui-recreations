<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Pathname } from "$app/types";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
</script>

<svelte:head>
    <title>Recreating UIs in Svelte</title>
</svelte:head>
{#snippet Link(href: Pathname, title: string, ext: string)}
    <div class="link">
        <a href={resolve(href)} {@attach vibrateOnClick(50)}> {title}</a>
        <p>{ext}</p>
    </div>
{/snippet}

<div
    class={[
        "absolute inset-0 flex justify-center overflow-x-clip overflow-y-auto bg-stone-200 p-10 font-playpen text-stone-900",
    ]}
>
    <div class="text-center md:max-w-[80%]">
        <h1 class="mb-10 text-5xl font-bold">UI Recreations</h1>
        <nav class="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-x-6">
            {@render Link("/components", "Components", "")}
            {@render Link("/airtel-black", "Airtel Black", "https://airtelblack.com")}
            {@render Link("/7guis", "7guis", "https://eugenkiss.github.io/7guis/tasks")}
            {@render Link("/youtube-notes", "Youtube Notes", "https://instadeq.com/youtube-notes/")}
            {@render Link(
                "/fluid-navbar",
                "Fluid Navbar",
                "https://www.youtube.com/watch?v=S98uVU2CAl0"
            )}
            {@render Link("/profile-card", "Profile Card", "https://airtelblack.com")}
            {@render Link(
                "/minimal-sidebar",
                "Minimal Sidebar",
                "https://dribbble.com/shots/23883932-Minimal-sidebar-navigation-Untitled-UI"
            )}
        </nav>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .link {
        a {
            @apply text-xl;
        }
        p {
            @apply min-h-10  text-[10px] mx-auto opacity-50 select-all;
        }
    }
</style>
