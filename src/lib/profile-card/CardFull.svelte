<script lang="ts">
    import { BadgeCheck, CopyCheck, Plus, User } from "@lucide/svelte";

    type Props = {
        title: string;
        description: string;
        people: number;
        saves: number;
        image: string;
    };

    const { description, image, people, saves, title }: Props = $props();
</script>

<!-- Full Card -->
<div>
    <h2 class="text-center">Full</h2>
    <div
        class={[
            "font-[Montserrat]",
            "border border-neutral-300/40 bg-[#fafafa]",
            "min-h-110 w-60 shadow-sm shadow-neutral-400/10",
            "rounded-4xl p-1.5",
            "relative grid place-content-end overflow-clip",
        ]}
    >
        <!-- images -->
        <div
            class={["absolute inset-1.5 grid place-items-center overflow-clip rounded-3xl", "z-10"]}
        >
            <img
                src={image}
                alt={title}
                class={["absolute inset-0 aspect-square size-full object-cover opacity-80 "]}
            />
            <img
                src={image}
                alt={title}
                class={[
                    "absolute inset-0.5 z-10 aspect-square size-[98%] rounded-3xl object-cover",
                ]}
            />
            <div
                class={[
                    "absolute inset-0 z-40 rounded-3xl",
                    "shadow-[inset_0px_0px_15px_5px_rgba(0,0,0,0.5)]",
                ]}
            ></div>
        </div>

        <!-- text -->
        <div class="relative z-20 overflow-clip rounded-b-3xl p-4 pt-10">
            <div
                class={[
                    "absolute inset-0 -z-1",
                    "bg-linear-to-b from-neutral-100/20 to-neutral-200/90 mask-t-from-76%",
                ]}
            ></div>
            <h2 class="text flex flex-wrap items-center justify-start gap-2 font-medium">
                {title}
                <BadgeCheck class="fill-[#005302] stroke-[#4fde5580]" />
            </h2>
            <p class="mt-1 text-xs leading-relaxed">{description}</p>

            <div class="mt-2 flex justify-between">
                <span class="flex items-center justify-center gap-1 text-xs font-semibold">
                    <User class="size-2.5 stroke-neutral-600 stroke-[2.5]" />
                    {people}
                </span>
                <span class="flex items-center justify-center gap-1 text-xs font-semibold">
                    <CopyCheck class="size-2.5 stroke-neutral-600 stroke-[2.5]" />
                    {saves}
                </span>

                <button
                    class={[
                        "select-none",
                        "flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold",
                        "bg-linear-to-b from-neutral-100 from-0% via-neutral-200 to-neutral-300",
                        "border border-neutral-300 shadow-xs shadow-neutral-400/20 hover:shadow-neutral-400/50",
                        "transition-shadow duration-300",
                    ]}
                >
                    <span class="translate-x-1">Follow</span>
                    <Plus class="size-4" />
                </button>
            </div>
        </div>
    </div>
</div>
