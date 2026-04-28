<script lang="ts">
    import type { Snippet } from "svelte";

    const { children }: { children: Snippet } = $props();
</script>

<span class="text-sm text-taupe-700">{@render children()}</span>
