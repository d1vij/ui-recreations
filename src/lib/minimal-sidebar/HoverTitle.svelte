<script lang="ts">
    import { fade } from "svelte/transition";

    type Props = {
        content: string;
    };
    const { content }: Props = $props();
</script>

<span
    transition:fade={{ duration: 50 }}
    class={[
        "absolute top-1/2 left-8 z-20 -translate-y-1/2 rounded-md  px-1 text-xs font-semibold text-neutral-800/80 shadow",
        "bg-[#f3f5f7]  dark:bg-[#0a0a0a]",
        "border border-[#ebedef] dark:border-[#1c1c1c]",
    ]}
>
    {content}
</span>
