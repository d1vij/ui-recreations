<button class="btn">
    <div class="thumb"></div>
    Book A Demo
</button>

<style lang="postcss">
    @reference "tailwindcss";

    :root {
        --btn-bg: #1f222a;
    }

    @keyframes passby {
        from {
            transform: translate(-60%);
        }
        to {
            transform: translate(0%);
        }
    }
    .thumb {
        @apply absolute inset-0 h-full w-full rounded-lg;
        @apply overflow-clip;
        background-color: var(--btn-bg);
        transform: translate(calc(-100% + --spacing(10)));
        transition: transform 700ms
            linear(
                0,
                0.013 1%,
                0.051 2.2%,
                0.404 9.8%,
                0.51 12.6%,
                0.602 15.5%,
                0.683 18.7%,
                0.754 22.2%,
                0.813 26%,
                0.861 30.2%,
                0.9 34.8%,
                0.931 40%,
                0.972 52.7%,
                0.992 70.2%,
                1
            );

        &::before {
            content: "";
            @apply absolute left-0 -z-10 h-full;
            animation: passby 5s linear infinite;
            background: repeating-linear-gradient(
                90deg,
                #a1b253 0%,
                #a1b253 5%,
                #717d3a 5%,
                #717d3a 10%
            );
            @apply w-dvw blur;
        }
        &::after {
            content: "";
            @apply absolute inset-0;
            @apply bg-linear-to-b from-[#E5FF76] to-[#D5FF09];
            mask-image: url("$lib/assets/heart.svg"), linear-gradient(var(--btn-bg));
            /*negative mask where the filled svg cuts out the background*/
            mask-composite: exclude;
            mask-size: --spacing(6) 100%;
            mask-position: --spacing(2.6);
            mask-repeat: repeat-x;
        }

    }
    .btn:is(:hover, :active) .thumb {
        transform: translate(0);
    }
    .btn {
        @apply relative;
        @apply overflow-clip;
        background-color: var(--btn-bg);
        color: #fffefe;
        @apply cursor-pointer rounded-xl p-2 pl-12;
        @apply border-2 shadow-md shadow-(color:--btn-bg);
        border-color: #08080a80;
    }
</style>
