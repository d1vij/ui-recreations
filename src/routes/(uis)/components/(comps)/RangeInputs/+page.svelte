<script lang="ts">
    import First from "./First.svelte";
</script>

<div class="size-full">
    <h2 class="subtitle">https://codepen.io/alvaromontoro/pen/ZYEYROo</h2>
    <First />
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 text-sm text-wrap wrap-break-word text-taupe-700 select-all;
    }
</style>
