<script lang="ts">
    import CardFull from "./CardFull.svelte";
    import CardHalf from "./CardHalf.svelte";
    import sophie from "./assets/sophie.png";
    import ethan from "./assets/ethan.jpg";
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<main class="bg-[#f5f5f5] p-20">
    <div class="mx-auto max-w-200">
        <div class="example">
            <CardHalf
                title="Sophie Bennet"
                description="Product Designer who focuses on simplicity & usability."
                people={312}
                saves={48}
                image={sophie}
            />
            <CardFull
                title="Sophie Bennet"
                description="Product Designer who focuses on simplicity & usability."
                people={312}
                saves={48}
                image={sophie}
            />
        </div>

        <hr class="mt-8 mb-5 border-neutral-300" />

        <div class="example">
            <CardFull
                title="Ethan Walker"
                description="Product Designer focused on clarity, efficiency, and intuitive user experiences."
                people={401}
                saves={22}
                image={ethan}
            />
            <CardHalf
                title="Ethan Walker"
                description="Product Designer focused on clarity, efficiency, and intuitive user experiences."
                people={401}
                saves={22}
                image={ethan}
            />
        </div>
    </div>
</main>

<style lang="postcss">
    @reference "tailwindcss";
    .example {
        @apply grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-2;
    }
</style>
