<script lang="ts">
    import First from "./First/First.svelte";
</script>

<div class="size-full">
    <h2 class="subtitle">https://codepen.io/Bizzy-Coding/pen/abaoOzg</h2>
    <First />
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all;
    }
</style>
