<script lang="ts">
    import { resolve } from "$app/paths";

    const links: {
        title: string;
        in: Parameters<typeof resolve>[number];
        out: string;
    }[] = [{ title: "Airtel Black", in: "/airtel-black", out: "https://airtelblack.com" }];
</script>

<div class="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 text-stone-900">
    <div class="max-w-200 space-y-8 text-center">
        <h1 class="text-5xl font-bold">UI Recreations in Svelte</h1>
        <nav class="flex flex-wrap justify-center gap-2 font-playpen">
            {#each links as link (link.title)}
                <div class="flex flex-col items-center justify-center">
                    <a class="hover-highlight text-lg" href={resolve(link.in)}> {link.title} </a>
                    <p class="text-sm opacity-50">{link.out}</p>
                </div>
            {/each}
        </nav>
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    * {
        font-family: var(--font-playpen);
    }
</style>
