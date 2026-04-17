<script module lang="ts">
    import type { Snippet } from "svelte";
    import type { ClassValue } from "svelte/elements";
    import { tv, type VariantProps } from "tailwind-variants";
    const label = tv({
        base: "p-1 px-3 place-content-center grid w-fit rounded-4xl font-semibold uppercase text-xs tracking-wide",
        variants: {
            color: {
                red: "bg-airtel-red/10 outline-airtel-red/50 text-airtel-red",
                green: "bg-[#edf7ed] text-[#4aab4e]",
            },
            outline: {
                true: "outline",
            },
        },
        defaultVariants: {
            outline: false,
        },
    });

    export type LabelProps = VariantProps<typeof label>;
</script>

<script lang="ts">
    type Props = { children: Snippet; class?: ClassValue } & LabelProps;

    const { children, color, outline, class: _class }: Props = $props();
</script>

<span class={[label({ color, outline }), _class]}>
    {@render children()}
</span>
