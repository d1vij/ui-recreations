<script lang="ts">
    import RippleEffect from "./RippleEffect/RippleEffect.svelte";
</script>

<div class="size-full">
    <h2 class="subtitle">Ripple Effect on Click</h2>
    <RippleEffect />
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all;
    }
</style>
