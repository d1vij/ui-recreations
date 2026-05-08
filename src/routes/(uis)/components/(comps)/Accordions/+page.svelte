<script lang="ts">
    import First from "./First.svelte";
</script>

<nav class="nav-bar">
    <a href="#first">First</a>
    <a href="#first">Second</a>
    <a href="#first">Third</a>
</nav>
<div class="mt-16 size-full">
    <h2 class="subtitle">https://codepen.io/Bizzy-Coding/pen/abaoOzg</h2>
    <First />
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .nav-bar {
        @apply flex w-full flex-wrap gap-4 scroll-smooth;
        > a {
            @apply w-fit rounded bg-taupe-600 p-2 tracking-wider text-taupe-300 shadow shadow-taupe-700/40;
        }
    }
    .subtitle {
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all;
    }
</style>
