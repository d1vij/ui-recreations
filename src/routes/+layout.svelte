<script lang="ts">
    import "./layout.css";
    const { children } = $props();
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{@render children()}
