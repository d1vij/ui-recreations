<script module>
	import type { Snippet } from "svelte";
	import { tv, type VariantProps } from "tailwind-variants";
	const label = tv({
		base: "p-1 px-4 place-content-center grid w-fit rounded-4xl font-semibold uppercase text-sm",
		variants: {
			color: {
				red: "bg-airtel-red/10 outline-airtel-red/50 text-airtel-red",
				green: "bg-green-300",
			},
			outline: {
				true: "outline",
			},
		},
		defaultVariants: {
			outline: false,
		},
	});

	type LabelProps = VariantProps<typeof label>;
</script>

<script lang="ts">
	type Props = { children: Snippet } & LabelProps;

	const { children, color, outline }: Props = $props();
</script>

<span class={label({ color, outline })}>
	{@render children()}
</span>
