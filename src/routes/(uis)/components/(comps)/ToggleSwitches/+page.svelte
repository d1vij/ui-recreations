<script lang="ts">
    import Fluid from "./buttons/Fluid.svelte";

    const buttons = [Fluid];
</script>

<div class="absolute inset-0 grid grid-cols-3 place-items-center gap-16 overflow-auto p-8">
    {#each buttons as Btn, idx (idx)}
        <div class="relative flex size-fit flex-col items-center gap-1 place-self-start">
            <Btn />
        </div>
    {/each}
</div>
