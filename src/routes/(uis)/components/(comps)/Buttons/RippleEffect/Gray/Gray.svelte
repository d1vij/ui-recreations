<script lang="ts">
    import type { Attachment } from "svelte/attachments";
    import styles from "./style.module.css";
    import { on } from "svelte/events";
    import getClickCoordinate from "$lib/utils/getClickCoordinates";
    import { px } from "@d1vij/shit-i-always-use";

    const rippleOnClick: Attachment<HTMLButtonElement> = (node) => {
        return on(node, "click", (e) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [x, _, rect] = getClickCoordinate(e, node);

            const ripple = document.createElement("span");
            ripple.classList.add(styles.ripple);

            ripple.style.inset = px(0);
            ripple.style.left = px(Math.max(0, x - 10));
            ripple.style.right = px(Math.min(rect.width - x - 10, rect.width));

            ripple.style.pointerEvents = "none";
            ripple.style.position = "absolute";

            ripple.addEventListener("animationend", ripple.remove);
            node.appendChild(ripple);
        });
    };
</script>

<div class="bg-zinc-800 p-4">
    <button class={styles.btn} {@attach rippleOnClick}> Click Me </button>
</div>
