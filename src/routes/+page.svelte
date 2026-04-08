<script lang="ts">
    import { resolve } from "$app/paths";
    import type { ValidSlugs } from "./[id]/+page";

    const links: {
        title: string;
        slug: ValidSlugs;
        out?: string;
    }[] = [
        { title: "Airtel Black", slug: "airtel-black", out: "https://airtelblack.com" },
        {
            title: "Fluid Navbar",
            slug: "fluid-navbar",
            out: "https://www.youtube.com/watch?v=S98uVU2CAl0",
        },
        {
            title: "Responsive Sidebar",
            slug: "responsive-sidebar",
        },
        {
            title: "Profile Card",
            slug: "profile-card",
            out: "https://dribbble.com/shots/26033069-Profile-Card",
        },
    ];
</script>

<div
    class="absolute inset-0 flex flex-col items-center justify-center overflow-x-clip overflow-y-scroll bg-stone-200 font-playpen text-stone-900"
>
    <div class="space-y-8 text-center md:max-w-[80%]">
        <h1 class="text-5xl font-bold">UI Recreations in Svelte</h1>
        <nav class="flex max-w-200 flex-wrap justify-center gap-8 font-playpen">
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
                    <p class="min-h-10 max-w-[30ch] text-sm opacity-50 select-all">{link.out}</p>
                </div>
            {/each}
        </nav>
    </div>
</div>
