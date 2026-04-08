<script lang="ts">
    import { resolve } from "$app/paths";
    import type { ValidSlugs } from "./[id]/+page";

    const links: {
        title: string;
        slug: ValidSlugs;
        out?: string;
    }[] = [
        { title: "Airtel Black", slug: "airtel-black", out: "https://airtelblack.com" },
        { title: "Fluid Navbar", slug: "fluid-navbar", out: "https://www.youtube.com/watch?v=S98uVU2CAl0" },
    ];
</script>

<div
    class="absolute inset-0 flex flex-col items-center justify-center bg-stone-200 font-playpen text-stone-900"
>
    <div class="max-w-200 space-y-8 text-center">
        <h1 class="text-5xl font-bold">UI Recreations in Svelte</h1>
        <nav class="flex flex-wrap justify-center gap-2 font-playpen">
            {#each links as link (link.title)}
                <div class="flex flex-col items-center justify-center">
                    <a
                        class="hover-highlight text-lg"
                        href={resolve("/[id]", {
                            id: link.slug,
                        })}
                    >
                        {link.title}
                    </a>
                    <p class="text-sm opacity-50 select-all">{link.out}</p>
                </div>
            {/each}
        </nav>
    </div>
</div>
