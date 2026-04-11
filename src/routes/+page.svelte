<script lang="ts">
    import { resolve } from "$app/paths";
    import { links } from "$lib/links";
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
            {#each Object.keys(links) as slug (slug)}
                {@const { title, out } = links[slug as keyof typeof links]}
                <div class="flex flex-col items-center justify-center">
                    <a
                        class="hover-highlight text-lg"
                        href={resolve("/[slug]", {
                            slug: slug,
                        })}
                    >
                        {title}
                    </a>
                    <p class="min-h-10 max-w-[30ch] text-sm opacity-50 select-all">{out}</p>
                </div>
            {/each}
        </nav>
    </div>
</div>
