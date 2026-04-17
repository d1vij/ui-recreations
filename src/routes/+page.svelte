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
    class="absolute inset-0 flex flex-col items-center overflow-x-clip overflow-y-scroll bg-stone-200 pt-50 font-playpen text-stone-900"
>
    <div class="text-center md:max-w-[80%]">
        <h1 class="mb-20 text-5xl font-bold">UI Recreations in Svelte</h1>
        <nav class="nav">
            {@render Link("/airtel-black", "Airtel Black", "https://airtelblack.com")}
            {@render Link(
                "/fluid-navbar",
                "Fluid Navbar",
                "https://www.youtube.com/watch?v=S98uVU2CAl0"
            )}
            {@render Link(
                "/minimal-sidebar",
                "Minimal Sidebar",
                "https://dribbble.com/shots/23883932-Minimal-sidebar-navigation-Untitled-UI"
            )}
            {@render Link("/profile-card", "Profile Card", "https://airtelblack.com")}
            {@render Link("/7guis", "7guis", "https://eugenkiss.github.io/7guis/tasks")}
            {@render Link("/components", "Components", "")}
            {@render Link("/youtube-notes", "Youtube Notes", "https://instadeq.com/youtube-notes/")}
        </nav>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .nav {
        @apply flex max-w-200 flex-wrap justify-center gap-8;
    }
    .link {
        @apply flex flex-col items-center justify-center;
        a {
            @apply text-lg;
        }
        p {
            @apply min-h-10 max-w-[20ch] text-sm opacity-50 select-all;
        }
    }
</style>
