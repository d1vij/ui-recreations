<script lang="ts">
    let value = $state("");
    let hasContent = $derived(Boolean(value.length));
</script>

<label class="label">
    {#if hasContent}
        <span class="label-text">Email</span>
    {/if}
    <input class="input" type="email" placeholder="Email" bind:value />
</label>

<style lang="postcss">
    @reference "tailwindcss";

    @keyframes slide {
        from {
            transform: translateY(--spacing(6));
            opacity: 0;
        }
        to {
            transform: translateY(--spacing(0));
            opacity: 1;
        }
    }

    .label {
        @apply relative block w-fit;
        @apply bg-linear-to-b from-neutral-100 from-50% to-neutral-200 to-100%;
        @apply rounded-xl outline outline-neutral-300 focus-within:outline-3 focus-within:outline-blue-500;
        @apply transition-all duration-100;

        /*element is not focused withing and has an invalid input*/
        &:not(:focus-within):has(.input:invalid) {
            @apply text-red-500 outline-3 outline-red-500;
        }
    }

    .label-text {
        @apply absolute -top-6 left-4 text-sm font-light tracking-wide text-neutral-500;
        animation: slide 200ms alternate;
    }

    .input {
        @apply size-full p-2;
        &:focus {
            outline: none;
        }
    }
</style>
