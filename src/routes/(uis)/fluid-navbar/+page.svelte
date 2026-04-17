<script lang="ts">
    let activeIdx = $state(0);
</script>

<svelte:head>
    <title>Fluid Navbar</title>
</svelte:head>

<!-- background -->
<div class="absolute inset-0 grid place-items-center overflow-clip bg-[#101010]">
    <div class="mt-5">
        <div class="relative scale-80 md:scale-100">
            <!-- border -->
            <div
                class="rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 p-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)] md:p-1"
            >
                <div
                    class={[
                        "rounded-full bg-linear-to-b from-neutral-800 to-neutral-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.05)]",
                        "p-0.5 md:p-1",
                    ]}
                >
                    <!-- nav -->
                    <nav
                        class={[
                            "relative z-20 size-full overflow-hidden",
                            "flex items-center justify-center rounded-full bg-linear-to-b from-neutral-800 to-neutral-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.05)]",
                        ]}
                    >
                        <!-- background slider -->
                        <div
                            class={[
                                "slider",
                                "absolute top-0 bottom-0  z-10 overflow-hidden rounded-full",
                                "bg-linear-to-b from-white/9 to-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-sm",
                            ]}
                        ></div>

                        <!-- active button highlight -->
                        <div
                            class={[
                                "active-highlight",
                                "absolute inset-0 z-20",
                                "rounded-full bg-linear-to-b from-neutral-200 to-neutral-400",
                            ]}
                        ></div>

                        {#each ["Projects", "Gallery", "Studio", "Profile"] as label, idx (label)}
                            {@const isActive = idx === activeIdx}
                            <button
                                onclick={() => (activeIdx = idx)}
                                class={[
                                    "nav-button relative z-30 overflow-clip rounded-full",
                                    "cursor-pointer text-center font-semibold text-white transition-colors duration-300",
                                    isActive && "active text-black!",
                                ]}
                                type="button"
                            >
                                <span
                                    class="flex w-full items-center justify-center rounded-full px-4 py-2 text-center md:px-6 md:py-3"
                                >
                                    {label}
                                </span>
                            </button>
                        {/each}
                    </nav>
                </div>
            </div>
        </div>

        <h2 class="mt-5 text-center font-serif text-neutral-200/50">
            <!-- L firefox -->
            (transitions dont work on firefox)
        </h2>
    </div>
</div>

<style lang="postcss">
    .nav-button {
        &.active {
            anchor-name: --active-button;
        }
        &:hover {
            anchor-name: --hovered-button;
            &.active {
                anchor-name: --active-button, --hovered-button;
            }
        }
    }
    .slider {
        position-anchor: --hovered-button;
        width: anchor-size(width, 100%);
        top: anchor(top, 0);
        left: anchor(left, 0);
        transition: all 400ms
            linear(
                0,
                0.332 9.1%,
                0.594 18.5%,
                0.793 28.4%,
                0.87 33.6%,
                0.933 39%,
                0.976 44%,
                1.009 49.2%,
                1.031 54.7%,
                1.042 60.6%,
                1.041 70.9%,
                1.007 91.4%,
                1
            );
    }
    .active-highlight {
        position-anchor: --active-button;
        left: anchor(left);
        width: anchor-size(width);
        transition: all 400ms
            linear(
                0,
                0.332 9.1%,
                0.594 18.5%,
                0.793 28.4%,
                0.87 33.6%,
                0.933 39%,
                0.976 44%,
                1.009 49.2%,
                1.031 54.7%,
                1.042 60.6%,
                1.041 70.9%,
                1.007 91.4%,
                1
            );
    }
</style>
