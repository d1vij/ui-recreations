<script lang="ts">
    import { page } from "$app/state";
    import { resolve } from "$app/paths";

    const slug = page.url.pathname;
</script>

<div class="absolute inset-0 grid place-items-center">
    <section class="mb-30 rounded-md bg-stone-200/40 p-6 text-stone-900 shadow shadow-stone-400/40">
        <h1 class="text-lg font-black text-red-400">ERROR</h1>
        <h2>Incorrect path slug <span class="text-cyan-700">{slug}</span></h2>
        <p class="mt-3">
            <a href={resolve("/")} class="underline decoration-stone-900/40 decoration-wavy"
                >Go Home</a
            >
        </p>
    </section>
</div>
