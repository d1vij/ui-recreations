<script lang="ts">
	import Label from "$lib/Label.svelte";
</script>

<section
	class={["hero", "mt-15 h-dvh", "flex flex-col items-center justify-center gap-8 text-center"]}
>
	<Label color="red" outline>★★★★★ A Premium Customer Experience ★★★★★</Label>
	<div class="text-6xl">
		<h1 class="font-black tracking-tighter text-white">Your issue has been</h1>
		<span
			><span class="text-white/50 line-through">resolved</span>
			<span class="font-black text-airtel-red">ignored.</span></span
		>
	</div>
	<p>
		Welcome to Airtel Blackout — a love letter to India's most profitable telecom, where the
		only thing faster than your "up to 1 Gbps" connection is the speed at which they close your
		tickets without reading them.
	</p>
</section>

<style lang="scss">
	.hero {
		background: linear-gradient(
			135deg,
			var(--color-airtel-black) 0%,
			#2a0a0a 50%,
			var(--color-airtel-black) 100%
		);
	}
</style>
