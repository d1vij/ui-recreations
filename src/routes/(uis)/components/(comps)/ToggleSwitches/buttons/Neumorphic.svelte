<script lang="ts">
    import Title from "../Title.svelte";
</script>

<label class="nu-border wrapper">
    <input type="checkbox" />
    <div class="background">
        <div class={["bob nu-border", ""]}></div>
    </div>
</label>
<Title>Neumorphic</Title>

<style lang="postcss">
    @reference "tailwindcss";
    .nu-border {
        @apply rounded outline-2 outline-black;
    }

    .wrapper {
        @apply flex items-center justify-start;
        @apply h-4 w-12 px-1;
        transition: all 100ms;

        input {
            display: none;
        }

        &:has(input:checked) {
            @apply justify-end;
        }
        input:checked ~ .background .bob {
            @apply bg-emerald-600;
        }
    }
    .background {
        @apply relative cursor-pointer bg-white;
    }

    .bob {
        @apply h-6 w-5 bg-neutral-600;
    }
</style>
