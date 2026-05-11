<script lang="ts">
    import getClickCoordinate from "$lib/utils/getClickCoordinates";
    import { px } from "@d1vij/shit-i-always-use";
    import styles from "./style.module.css";

    import type { Attachment } from "svelte/attachments";
    import { on } from "svelte/events";

    const rippleOnClick: Attachment<HTMLButtonElement> = (node) => {
        return on(node, "click", (e) => {
            const [x, y, rect] = getClickCoordinate(e, node);

            // Distance to cover on x axis to fill the button
            const dx = Math.max(x, rect.width - x);

            // Distance to cover on y axis to fill the button
            const dy = Math.max(y, rect.height - y);

            // Radius of the circle
            const radius = Math.sqrt(dx * dx + dy * dy) * 2;

            const ripple = document.createElement("span");
            ripple.classList.add(styles.ripple);
            ripple.style.left = px(x);
            ripple.style.top = px(y);

            ripple.style.height = px(radius);
            ripple.style.width = px(radius);
            ripple.style.pointerEvents = "none";
            ripple.style.position = "absolute";

            ripple.addEventListener("animationend", ripple.remove);
            node.appendChild(ripple);
        });
    };
</script>

<button class={styles.btn} {@attach rippleOnClick}> Click Me </button>
