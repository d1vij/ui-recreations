import type { ValidSlugs } from "../routes/[slug]/+page";

import AirtelBlack from "$lib/airtel-black/App.svelte";
import FluidNavbar from "$lib/fluid-navbar/App.svelte";
import MinimalSidebar from "$lib/minimal-sidebar/App.svelte";
import ProfileCard from "$lib/profile-card/App.svelte";
import SevenGuis from "$lib/7guis/App.svelte";
import type { Component } from "svelte";

export const links: Record<
    string,
    {
        title: string;
        out?: string;
        component: Component
    }
> = {
    "airtel-black": { title: "Airtel Black", out: "https://airtelblack.com", component: AirtelBlack },
    "fluid-navbar": {
        title: "Fluid Navbar",
        out: "https://www.youtube.com/watch?v=S98uVU2CAl0",
        component: FluidNavbar
    },
    "minimal-sidebar": {
        title: "Minimal Responsive Sidebar",
        out: "https://dribbble.com/shots/23883932-Minimal-sidebar-navigation-Untitled-UI",
        component: MinimalSidebar
    },
    "profile-card": {
        title: "Profile Card",
        out: "https://dribbble.com/shots/26033069-Profile-Card",
        component: ProfileCard },
    "7guis": {
        title: "7guis",
        out: "https://eugenkiss.github.io/7guis/tasks",
        component: SevenGuis
    },
} as const;


const pages = {
    "airtel-black": AirtelBlack,
    "fluid-navbar": FluidNavbar,
    "minimal-sidebar": MinimalSidebar,
    "profile-card": ProfileCard,
    "7guis": SevenGuis,
} as const;
