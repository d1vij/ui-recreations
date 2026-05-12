<script lang="ts">
    type Props = {
        label: string;
        password?: boolean;
    };

    const { label, password }: Props = $props();

    let value = $state("");
    let hasContent = $derived(Boolean(value.length));
</script>

<label class="label">
    <span class={["label-text", hasContent && "has-content"]}
        >{label}</span
    >
    <input class={[
        "input", password && "is-password"
    ]} type="text" bind:value />
</label>

<style lang="postcss">
    @reference "tailwindcss";

    .label {
        @apply relative block w-fit rounded-lg bg-mist-300;
        @apply cursor-pointer border-2 border-mist-600 shadow shadow-mist-600/40 focus-within:shadow-mist-600/70;
    }

    .label-text {
        @apply pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 px-1;
        @apply transition-all;
        @apply bg-mist-300 text-mist-500;
        @apply rounded border-2 border-dotted border-mist-300;

    }

    .label:has(.input:focus) .label-text,
    .label-text.has-content {
        @apply -top-1 text-xs;
        @apply border-solid border-mist-600 text-mist-700;
    }

    .input {
        @apply size-full p-2 text-mist-800;
        &:focus {
            outline: none;
        }

        &.is-password {
            -webkit-text-security: disc;
        }
    }
</style>
