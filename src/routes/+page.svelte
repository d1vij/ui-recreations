<script lang="ts">
    import { resolve } from "$app/paths";
</script>

<svelte:head>
    <title>Recreating UIs in Svelte</title>
</svelte:head>

<div
    class="absolute inset-0 flex flex-col items-center justify-center overflow-x-clip overflow-y-scroll bg-stone-200 font-playpen text-stone-900"
>
    <div class="space-y-8 text-center md:max-w-[80%]">
        <h1 class="text-5xl font-bold">UI Recreations in Svelte</h1>
        <nav class="flex max-w-200 flex-wrap justify-center gap-8 font-playpen">
            <div class="link">
                <a href={resolve("/airtel-black")}> Airtel Black</a>
                <p>https://airtelblack.com</p>
            </div>
            <div class="link">
                <a href={resolve("/fluid-navbar")}> Fluid Navbar</a>
                <p>https://www.youtube.com/watch?v=S98uVU2CAl0</p>
            </div>
            <div class="link">
                <a href={resolve("/minimal-sidebar")}> Minimal Sidebar</a>
                <p>https://dribbble.com/shots/23883932-Minimal-sidebar-navigation-Untitled-UI</p>
            </div>
            <div class="link">
                <a href={resolve("/profile-card")}> Profile Card </a>
                <p>https://dribbble.com/shots/26033069-Profile-Card</p>
            </div>
            <div class="link">
                <a href={resolve("/7guis")}> 7 Guis</a>
                <p>https://eugenkiss.github.io/7guis/tasks</p>
            </div>
        </nav>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    .link {
        @apply flex flex-col items-center justify-center;
        a {
            @apply text-lg;
        }
        p {
            @apply min-h-10 max-w-[30ch] text-sm opacity-50 select-all;
        }
    }
</style>
