<script lang="ts">
    import "./tailwind.css";

    import Header from "./lib/Header.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
    import Videos from "./lib/Videos.svelte";
    import HeaderTopicSelections from "./lib/HeaderTopicSelections.svelte";
</script>

<div class="grid h-dvh w-dvw grid-rows-[auto_1fr] bg-primary text-text-color">
    <Header />
    <section class="grid grid-cols-[auto_1fr] size-full overflow-hidden">
        <Sidebar />
        <div class="grid grid-rows-[auto_1fr] overflow-hidden">
            <HeaderTopicSelections />
            <Videos />
        </div>
    </section>
</div>
