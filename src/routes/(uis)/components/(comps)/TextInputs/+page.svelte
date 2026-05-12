<script lang="ts">
    // import EmailInputField from "./EmailInputField.svelte";
    import First from "./First.svelte";
</script>

<div class="flex size-full flex-wrap content-start gap-3">
    <div class="wrapper flex flex-col gap-2">
        <First label="Username" />
        <First label="Password" password />
    </div>

    <!-- <div class="wrapper">
        <span class="subtitle mb-8!">https://dribbble.com/shots/4826139-Email-Input-Field</span>
        <EmailInputField />
    </div> -->
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .subtitle {
        @apply mb-2 ml-2 block text-sm text-wrap wrap-break-word text-taupe-700 select-all;
    }

    .wrapper {
        @apply h-fit w-fit space-y-3 rounded-lg border-2 border-dotted border-taupe-400 p-4;
    }
</style>
