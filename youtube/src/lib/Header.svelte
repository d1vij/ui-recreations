<script lang="ts">
    import { Bell, CircleUser, Menu, Plus, Youtube } from "lucide-svelte";
    import HeaderSearch from "./HeaderSearch.svelte";
    import { appstate } from "./state.svelte";

    function toggleSidebar() {
        appstate.sidebarOpen = !appstate.sidebarOpen;
    }
</script>

<header class="flex flex-col gap-4 p-4">
    <div class={["grid grid-cols-[auto_1fr_auto] place-items-center gap-2", ""]}>
        <div class="flex gap-4">
            <button class="cursor-pointer rounded-4xl" onclick={toggleSidebar}>
                <Menu />
            </button>
            <span class="grid grid-cols-[auto_1fr] place-items-center gap-1">
                <Youtube class="size-8 fill-red-400/30 stroke-red-500 stroke-1" />
                <h1 class="youtubeName text-xl">
                    <p class="text-xs opacity-70">IN</p>
                    Youtube
                </h1>
            </span>
        </div>
        <HeaderSearch />

        <div class="grid grid-cols-[2fr_auto_auto] gap-2">
            <button
                class="flex items-center justify-center gap-2 rounded-3xl bg-secondary p-2 px-4"
            >
                <Plus />
                Create
            </button>
            <button>
                <Bell />
            </button>
            <button>
                <CircleUser class="size-8" />
            </button>
        </div>
    </div>
</header>

<style lang="scss">
    .youtubeName {
        anchor-name: --yt-name;
        position: relative;
        p {
            position: absolute;
            position-anchor: --yt-name;
            top: anchor(top);
            right: 0;
            translate: 100%;
        }
    }
</style>
