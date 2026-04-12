<script lang="ts">
    import "./app.css";
    import Hero from "./Hero.svelte";
    import Header from "./Header.svelte";
    import Services from "./Services.svelte";
    import CeoLetter from "./CeoLetter.svelte";
    import CaseStudy from "./CaseStudy.svelte";
    import TheWall from "./TheWall.svelte";
    import Glossary from "./Glossary.svelte";
    import SupportBingo from "./SupportBingo/";
    import FIQ from "./FIQ.svelte";
</script>

<svelte:head>
    <title>Airtel Blackout</title>
</svelte:head>

<div class="text-white/50">
    <Header />
    <Hero />
    <Services />
    <CeoLetter />
    <CaseStudy />
    <TheWall />
    <Glossary />
    <SupportBingo />
    <FIQ />
</div>
