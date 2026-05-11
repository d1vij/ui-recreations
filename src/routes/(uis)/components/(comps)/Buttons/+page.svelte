<script lang="ts">
    import RippleEffect from "./RippleEffect/RippleEffect.svelte";
    import Button2 from "./Button2.svelte";
    import ButtonThatRemembers from "./ButtonThatRemembers.svelte";
</script>

<div class="size-full">
    <h2 class="subtitle">Ripple Effect on Click</h2>
    <RippleEffect />
    <hr />

    <h2 class="subtitle">https://dribbble.com/shots/23441010--Button-Hover-Animation-CSS</h2>
    <Button2 />

    <hr />
    <h2 class="subtitle">https://dribbble.com/shots/23278381-A-Button-That-Remembers</h2>
    <ButtonThatRemembers/>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 text-sm text-taupe-700 select-all;
    }

    hr {
        @apply my-5 rounded-full border-2 border-taupe-300;
    }
</style>
