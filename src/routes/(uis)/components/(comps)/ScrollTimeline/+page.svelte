<script lang="ts">
    import { range } from "@d1vij/shit-i-always-use";
    import type { PageProps } from "./$types";
    import { onMount } from "svelte";
    import { on } from "svelte/events";
    import { Tween } from "svelte/motion";
    import { sineOut } from "svelte/easing";
    import { useVibrate } from "@d1vij/shit-i-always-use/svelte";
    const { data }: PageProps = $props();

    let containerRef = $state<HTMLDivElement | null>(null);
    let progressRef = $state<HTMLDivElement | null>(null);
    const scrollProgress = new Tween(20, { duration: 250, easing: sineOut });

    onMount(() => {
        if (containerRef === null) return;
        console.log("a");
        return on(containerRef, "scroll", (e) => {
            if (progressRef === null) return;
            const target = e.currentTarget;
            const scrollHeight = target.scrollHeight;
            const currentScroll = target.scrollTop;
            const ratio = currentScroll / scrollHeight;
            const width = target.offsetWidth;
            scrollProgress.set(ratio * width + 20);

            if (scrollHeight % 20 === 0) {
                useVibrate(200);
            }
        });
    });
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&display=block"
        rel="stylesheet"
    />

    <title>Components | Scroll Timeline</title>
</svelte:head>

<div
    style:width={`${scrollProgress.current}px`}
    class="absolute top-0 left-0 z-20 h-4 rounded-r-full bg-taupe-700"
    bind:this={progressRef}
></div>
<div
    bind:this={containerRef}
    style:font-family="Redacted script"
    class={["absolute inset-0 space-y-8 overflow-y-auto py-8 md:px-16"]}
>
    <!-- Progress -->

    {#await data.posts then posts}
        {#each range(3)}
            {#each posts as post (post.slug)}
                <div class="leading-tight">
                    <h2 class="mb-4 text-4xl font-semibold tracking-widest">{post.title}</h2>
                    <p>
                        {post.content}
                    </p>
                </div>
            {/each}
        {/each}
    {/await}
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>
