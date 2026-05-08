<script lang="ts">
    import First from "./First.svelte";
</script>

<nav class="nav-bar">
    <a href="#first">First</a>
</nav>
<div class="mt-16 size-full">
    <h2 id="first" class="subtitle">https://codepen.io/alvaromontoro/pen/ZYEYROo</h2>
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
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all text-wrap wrap-break-word;
    }
</style>
