<script lang="ts">
    // https://instadeq.com/youtube-notes/
    import { onMount } from "svelte";
    import YoutubePlayer from "youtube-player";
    import { PlayerStates } from "./YtPlayerTypes";
    import type { YouTubePlayer } from "youtube-player/dist/types";
    import { dedent } from "radashi";

    // general
    let font = $state<"serif" | "mono">("serif");

    // Video Player
    let videoId = $state("olp_hlc4vhE");
    let player: YouTubePlayer = $derived.by(() => {
        if (!playerRef) throw new Error();
        return YoutubePlayer(playerRef, { videoId: videoId });
    });
    let playerState = $state<PlayerStates>(-1);
    let playerRef = $state<HTMLDivElement | null>(null);

    // Text Editor
    const placeholder = "a\nb";
    let textContent = $state("");

    onMount(() => {
        player.on("stateChange", (s) => {
            playerState = s.data;
        });
        player.on("ready", async () => {
            await player.playVideo();
            setTimeout(async () => {
                await player.pauseVideo();
            }, 5000);
        });
    });
</script>

{#snippet Player()}
    <div bind:this={playerRef} class="">
        <svelte:boundary>
            {#snippet onerror()}
                hi
            {/snippet}
            <script src="https://youtube.com/iframe_api"></script>
        </svelte:boundary>
    </div>
{/snippet}

<div class={["custom-font", "absolute inset-0 p-2", "bg-zinc-100"]} data-font={font}>
    <main class={["flex size-full flex-col gap-2 md:flex-row"]}>
        <div class="flex grow flex-col gap-2">
            <div class="size-full bg-zinc-800"></div>
            <div class={["base-outline", "w-full rounded-md bg-zinc-300 p-4"]}>
                <div class="font-selection">
                    <button
                        class={["toggle-button", "w-fit cursor-pointer rounded bg-zinc-200 p-2"]}
                        popovertarget="font-selection-menu"
                        popovertargetaction="toggle"
                    >
                        Font {font === "mono" ? "Monospaced" : "Serif"}
                    </button>
                    <div popover id="font-selection-menu">
                        <ul class="base-outline space-y-2 overflow-clip rounded bg-zinc-300 p-2">
                            {#each [["Monospace", "mono"], ["Serif", "serif"]] as [title, face] (face)}
                                <li>
                                    <button
                                        class={[
                                            "cursor-pointer bg-zinc-200 p-1 hover:bg-zinc-500/40",
                                            "w-full rounded text-left",
                                        ]}
                                        onclick={() => {
                                            font = face as typeof font;
                                        }}
                                    >
                                        {title}
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>

                <!-- TODO: add keyboard shortcuts -->
                <!-- Can we assume small screens wont have a keyboard ?? so no keyboard actions for them -->
                <div class="hidden size-full md:block"></div>
            </div>
        </div>
        <div class="grow">
            <textarea
                bind:value={textContent}
                class="size-full bg-stone-200 text-stone-950"
                {placeholder}
            ></textarea>
        </div>
    </main>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .custom-font {
        &[data-font="serif"] {
            font-family: serif;
        }
        &[data-font="mono"] {
            font-family: monospace;
        }
    }

    .font-selection {
        .toggle-button {
            anchor-name: --font-selection;
        }

        #font-selection-menu {
            @apply bg-transparent;
            position-anchor: --font-selection;
            top: calc(anchor(bottom) + --spacing(1));
            left: anchor(left);
        }
    }

    .base-outline {
        @apply overflow-hidden rounded border border-zinc-600/40;
        @apply shadow-sm shadow-zinc-800/30;
    }
</style>
