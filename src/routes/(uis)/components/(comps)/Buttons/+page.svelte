<script lang="ts">
    import RippleEffect from "./RippleEffect/RippleEffect.svelte";
    import Button2 from "./Button2.svelte";
</script>

<div class="size-full">
    <h2 class="subtitle">Ripple Effect on Click</h2>
    <RippleEffect />
    <hr />


    <h2 class="subtitle">https://dribbble.com/shots/23441010--Button-Hover-Animation-CSS</h2>
    <Button2/>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all;
    }

    hr {
        @apply my-5 border-2 rounded-full border-taupe-300;
    }
</style>
