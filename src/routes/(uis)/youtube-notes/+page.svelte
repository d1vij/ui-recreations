<script lang="ts" module>
    const TEXT_BUFFER_KEY = "TEXT_BUFFER_KEY";
    const FONT_FAMILY_KEY = "FONT_FAMILY_KEY";

    const YTVideoIdRegex =
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
</script>

<script lang="ts">
    import { onMount } from "svelte";

    import YoutubePlayer from "youtube-player";
    import type { YouTubePlayer } from "youtube-player/dist/types";
    import { createHotkey, createHotkeys, formatForDisplay } from "@tanstack/svelte-hotkeys";
    import { PersistedState } from "runed";
    import { MediaQuery } from "svelte/reactivity";
    import { clamp } from "radashi";
    import PlayerStates from "youtube-player/dist/constants/PlayerStates";

    let textBufferRef = $state<HTMLTextAreaElement | null>(null);
    let textBuffer = new PersistedState(TEXT_BUFFER_KEY, "");

    // config
    let font = new PersistedState<"serif" | "mono">(FONT_FAMILY_KEY, "serif");
    let fontSize = $state(16);
    let isMedium = new MediaQuery("width >= 48rem");
    let filename = $state("notes.txt");

    // Video Player
    let urlInputRef = $state<HTMLInputElement | null>(null);
    let urlInput = $state("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    let isValid = $state(true);
    let videoId = $derived.by(() => {
        if (!isValid) return "dQw4w9WgXcQ";
        return YTVideoIdRegex.exec(urlInput)?.at(1) as string;
    });

    let playerRef = $state<HTMLDivElement | null>(null);

    // Text Editor
    const placeholder = "a\nb";

    let player: YouTubePlayer;
    onMount(() => {
        if (!playerRef) throw new Error();
        player = YoutubePlayer(playerRef, { videoId });
    });

    async function loadVideo() {
        await player.loadVideoById(videoId);
    }

    function downloadTextBuffer() {
        const anchor = document.createElement("a");

        const blob = new Blob([textBuffer.current], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        anchor.href = url;
        anchor.download = filename || "notes.txt";
        anchor.click();
    }

    async function importTextBuffer() {
        const filepicker = document.createElement("input");
        filepicker.type = "file";
        filepicker.addEventListener("change", async () => {
            const file = filepicker.files?.item(0);
            if (!file) return;
            textBuffer.current = await file.text();
        });
        filepicker.click();
    }

    function seek(seconds: number) {
        return async () => {
            const duration = await player.getDuration();
            const currentTime = await player.getCurrentTime();
            await player.seekTo(clamp(currentTime + seconds, 0, duration), true);
        };
    }

    // Keybinds
    onMount(() => {
        // Player Actions
        createHotkeys([
            {
                hotkey: "Control+P",
                callback: async () => {
                    const state = await player.getPlayerState();
                    if (state === PlayerStates.PLAYING) {
                        await player.pauseVideo();
                    } else {
                        await player.playVideo();
                    }
                },
            },
            {
                hotkey: "Control+ArrowLeft",
                callback: seek(-10),
            },
            {
                hotkey: "Control+ArrowRight",
                callback: seek(10),
            },
        ]);

        // Input focus
        createHotkeys([
            {
                hotkey: "Control+U",
                callback: () => urlInputRef?.focus(),
            },
            {
                hotkey: "Control+E",
                callback: () => textBufferRef?.focus(),
            },
        ]);

        // Textbuffer actions
        createHotkeys([
            {
                hotkey: "Control+S",
                callback: downloadTextBuffer,
            },
            {
                hotkey: "Control+O",
                callback: importTextBuffer,
            },
        ]);

        // time mark
        createHotkey("Control+M", async () => {
            const currentTime = await player.getCurrentTime();
            const timestamp = ` ${Math.floor(currentTime / 60)}:${Math.round(currentTime % 60)} `;
            textBuffer.current += timestamp;
        });
    });
</script>

{#snippet Player()}
    <div bind:this={playerRef} class="w-full grow rounded bg-zinc-800"></div>
{/snippet}

{#snippet TextArea()}
    <div class="grow">
        <textarea
            bind:this={textBufferRef}
            bind:value={textBuffer.current}
            style:--font-size={`${fontSize}px`}
            onkeydown={(e) => {
                if (e.key === "Tab") {
                    const target = e.target as HTMLTextAreaElement;

                    const buffer = textBuffer.current;
                    textBuffer.current =
                        buffer.slice(0, target.selectionStart) +
                        "    " +
                        buffer.slice(target.selectionStart + 1);
                    target.focus();
                    e.preventDefault();
                }
            }}
            class={[
                "text-(length:--font-size)",
                "size-full resize-none bg-stone-200 text-stone-950",
                "rounded border border-zinc-300 p-2 caret-zinc-900 outline-none",
            ]}
            {placeholder}
        ></textarea>
    </div>
{/snippet}

{#snippet TopMenu()}
    <div
        class={[
            "flex w-full items-center justify-start gap-2 rounded-md border border-zinc-300 bg-zinc-300/50 p-2 text-sm ",
        ]}
    >
        <!-- Font Family -->
        <div class="font-selection w-fit">
            <button
                class={["toggle-button button", "w-fit cursor-pointer"]}
                popovertarget="font-selection-menu"
                popovertargetaction="toggle"
            >
                Font {font.current === "mono" ? "Monospaced" : "Serif"}
            </button>
            <div popover id="font-selection-menu">
                <ul class="space-y-1 overflow-clip rounded border border-zinc-400 bg-zinc-200 p-2">
                    {#each [["Monospace", "mono"], ["Serif", "serif"]] as [title, variant] (variant)}
                        <li>
                            <button
                                class={["custom-font", "button", "w-full text-left text-sm"]}
                                data-font={variant}
                                onclick={() => {
                                    font.current = variant as typeof font.current;
                                }}
                            >
                                {title}
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Font Size -->
        <div>
            <button
                class="button px-2 py-0! font-semibold"
                onclick={() => {
                    if (fontSize - 1 >= 1) fontSize--;
                }}>-</button
            >
            <span>{fontSize}px</span>
            <button class="button px-2 py-0! font-semibold" onclick={() => fontSize++}>+</button>
        </div>

        <!-- FileName -->
        <div class="relative ml-auto">
            <span
                class="absolute top-0 left-2 -translate-y-1/2 bg-zinc-200 text-xs font-medium text-zinc-600"
                >Filename</span
            >
            <input
                type="text"
                minlength="1"
                bind:value={filename}
                required
                placeholder="notes.txt"
                class="w-fit min-w-0 rounded border border-zinc-300 px-2 py-1 invalid:border-red-400 focus:border-zinc-400 focus:outline-none"
            />
        </div>
    </div>
{/snippet}

{#snippet BottomMenu()}
    <div class={["rounded border border-zinc-300", "flex flex-col bg-zinc-200 p-4 pb-5"]}>
        <div>
            <label class="relative flex gap-2">
                <span
                    class={[
                        "absolute top-0 left-4 -translate-y-1/2  text-sm font-medium text-zinc-600",
                        "from-0 to-full bg-linear-to-b from-zinc-200 to-zinc-300/50",
                    ]}
                >
                    Video Url
                </span>
                <input
                    bind:this={urlInputRef}
                    bind:value={urlInput}
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    onkeypress={(e) => {
                        if (e.key === "Enter") loadVideo();
                    }}
                    oninput={(v) => {
                        console.log(v.currentTarget.value);
                        isValid = YTVideoIdRegex.test(v.currentTarget.value);
                    }}
                    class={[
                        "grow rounded border bg-zinc-300/50 px-4 py-2 focus:outline-none",
                        isValid ? "border-zinc-300  focus:border-zinc-400" : "border-red-400",
                    ]}
                />
                <button
                    class="cursor-pointer rounded border border-zinc-300 bg-zinc-300/40 px-4 py-2 hover:border-zinc-400 hover:bg-zinc-300 focus:outline-none active:bg-zinc-300"
                    onclick={loadVideo}
                >
                    Load
                </button>
            </label>
        </div>

        <hr class="divider" />
        <!-- Can we assume small screens wont have a keyboard ?? so no keyboard action display for them, but the actions would work -->
        {#if isMedium.current}
            <div class={["flex gap-4 overflow-scroll text-xs", "keybinds"]}>
                {#snippet Keybind(label: string, keys: string[])}
                    <div class="flex flex-col">
                        <span class="text-zinc-700">{label}</span>
                        <span class="flex items-center gap-2">
                            {#each keys as key, idx (key)}
                                <span
                                    class="block w-fit rounded border border-zinc-400 bg-zinc-300 px-2 py-0.5"
                                    >{key}</span
                                >
                                {#if idx !== keys.length - 1}
                                    <span>+</span>
                                {/if}
                            {/each}
                        </span>
                    </div>
                {/snippet}

                {@render Keybind("Play / Pause", [formatForDisplay("Control"), "P"])}
                {@render Keybind("Focus Url Input", [formatForDisplay("Control"), "U"])}
                {@render Keybind("Focus TextPad", [formatForDisplay("Control"), "E"])}
                <hr class="divider horizontal" />
                {@render Keybind("Seek Backwards", [
                    formatForDisplay("Control"),
                    formatForDisplay("ArrowLeft"),
                ])}
                {@render Keybind("Seek Forwards", [
                    formatForDisplay("Control"),
                    formatForDisplay("ArrowRight"),
                ])}
                <hr class="divider horizontal" />
                {@render Keybind("Seek Forwards", [
                    formatForDisplay("Control"),
                    formatForDisplay("M"),
                ])}
            </div>
        {/if}
        <hr class="divider" />
        <div class="flex flex-wrap gap-2 text-sm">
            <button onclick={downloadTextBuffer} class="action-button">
                Download <span class="hidden md:inline">({formatForDisplay("Control+S")})</span>
            </button>
            <button class="action-button" onclick={importTextBuffer}>
                Import <span class="hidden md:inline">({formatForDisplay("Control+O")})</span>
            </button>
        </div>
    </div>
{/snippet}

<div class={["custom-font", "absolute inset-0 p-4", "bg-zinc-100"]} data-font={font.current}>
    <main class={["flex size-full flex-col gap-5 md:flex-row"]}>
        <div class="flex grow flex-col gap-2 md:w-1/2 md:grow-0">
            {@render TopMenu()}
            {@render Player()}
            {@render BottomMenu()}
        </div>
        {@render TextArea()}
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

    .button {
        @apply cursor-pointer rounded border border-zinc-400 bg-zinc-200 px-2 py-1 hover:bg-zinc-300/50 active:bg-zinc-300/30;
    }

    .keybinds {
        > div {
            @apply flex flex-col items-center justify-center gap-2;
        }
    }
    .divider {
        @apply mt-2 mb-2 rounded-full border-zinc-300;
        &.horizontal {
            @apply m-0 h-full border-t-0 border-l;
        }
    }
    .action-button {
        @apply cursor-pointer rounded border border-zinc-400 bg-zinc-300 px-2 py-1 hover:bg-zinc-400/40 active:bg-zinc-300/80;
    }
</style>
