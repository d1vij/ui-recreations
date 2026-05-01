<script lang="ts">
    import { resolve } from "$app/paths";
    import type { Pathname } from "$app/types";

    import { onClickOutsideAttachment, vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { endpoints } from "./endpoints";
    import { onNavigate } from "$app/navigation";
    import { title } from "radashi";
    const { children } = $props();

    let menuOpen = $state(false);

    onNavigate(() => {
        menuOpen = false;
    });
</script>

<div class={["bg-taupe-800", "absolute inset-0 overflow-clip"]}>
    <aside
        class={["menu", menuOpen && "open", "absolute flex  max-h-[80dvh]"]}
        {@attach onClickOutsideAttachment(() => {
            menuOpen = false;
        })}
    >
        <div class={["background", "grow bg-taupe-500", "flex rounded-b p-1 pt-0", ""]}>
            <div class="content relative grow rounded-b bg-taupe-300 p-2 text-taupe-800">
                <nav
                    class="grid grid-cols-2 gap-2 p-4 pt-6 font-[Gloock] md:grid-cols-3 md:text-lg"
                >
                    {#each endpoints as e (e)}
                        <span class={[""]}>
                            <a
                                href={resolve(`/(uis)/components/(comps)/${e}` as Pathname)}
                                class=""
                            >
                                {title(e)}
                            </a>
                        </span>
                    {/each}
                </nav>
                <div class="h-15 w-full"></div>
            </div>
        </div>
        <button
            class={[
                "menu-toggle",
                "group -z-10 w-10 cursor-grab active:cursor-grabbing",
                "absolute top-full right-0 md:right-8",
            ]}
            onclick={() => (menuOpen = !menuOpen)}
            title="Toggle Menu"
            {@attach vibrateOnClick([100, 200, 100])}
        >
            <!-- thread -->
            <div
                class={[
                    "thread",
                    "h-25 w-2 rounded-b-sm bg-stone-200 md:h-40",
                    "border border-taupe-700/50 shadow-xs shadow-taupe-900/40",
                ]}
            ></div>
            <!-- bob -->
            <div
                class={[
                    "absolute bottom-5 h-8 w-4 translate-y-3 rounded",
                    "bg-linear-to-r from-taupe-400 to-taupe-500 shadow shadow-taupe-800/10",
                ]}
            ></div>
        </button>
    </aside>

    <main
        class={[
            "font-[Gloock]",
            "absolute inset-x-5 inset-y-10 rounded  p-8 md:inset-y-20",
            "mx-auto flex max-w-300 flex-col",
            "overflow-x-hidden overflow-y-auto border-4 border-taupe-300 bg-taupe-200 shadow-sm shadow-taupe-100/50",
        ]}
    >
        {@render children()}
    </main>
</div>

<style lang="postcss">
    @import "./fonts.css";
    @reference "tailwindcss";

    .menu {
        position: relative;
        z-index: 100000;

        @apply w-[90%] md:max-w-240;
        left: 50%;
        translate: -50%;

        .background,
        .content {
            --mask:
                radial-gradient(44.72px at 50% calc(100% - 60px), #000 99%, #0000 101%)
                    calc(50% - 40px) 0/80px 100%,
                radial-gradient(44.72px at 50% calc(100% + 40px), #0000 99%, #000 101%) 50%
                    calc(100% - 20px)/80px 100% repeat-x;
            -webkit-mask: var(--mask);
            mask: var(--mask);
        }

        transform: translateY(-85%);
        --timing-fn: linear(
            0,
            0.013 1%,
            0.051 2.2%,
            0.404 9.8%,
            0.51 12.6%,
            0.602 15.5%,
            0.683 18.7%,
            0.754 22.2%,
            0.813 26%,
            0.861 30.2%,
            0.9 34.8%,
            0.931 40%,
            0.972 52.7%,
            0.992 70.2%,
            1
        );
        transition: transform 500ms var(--timing-fn);
        &.open {
            transform: translateY(0);
        }
    }

    .menu-toggle {
        @apply flex flex-col items-center;

        .thread {
            background: repeating-linear-gradient(
                45deg,
                var(--color-taupe-200),
                var(--color-taupe-200) 2px,
                var(--color-taupe-600) 2px,
                var(--color-taupe-800) 4px
            );
        }

        --timing-fn: linear(
            0,
            0.012 0.6%,
            0.045 1.2%,
            0.179 2.5%,
            0.896 7%,
            1.131 8.8%,
            1.274 10.5%,
            1.317 11.4%,
            1.337 12.3%,
            1.332 13.6%,
            1.29 15%,
            1.033 19.8%,
            0.95 21.7%,
            0.906 23.3%,
            0.886 25%,
            0.897 27.4%,
            1.01 33.9%,
            1.03 35.8%,
            1.039 37.7%,
            1.035 40.1%,
            0.997 46.6%,
            0.987 50.4%,
            1.004 63%,
            1
        );

        transition: translate 1.5s var(--timing-fn);
        @apply translate-y-[-50%] hover:translate-y-[-45%] active:translate-y-[-30%];
    }
</style>
