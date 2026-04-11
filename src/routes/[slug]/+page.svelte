<script lang="ts">
    import type { PageProps } from "./$types";
    const { data }: PageProps = $props();
</script>

<svelte:head>
    <title>
        {data.title}
    </title>
</svelte:head>

<data.component />
