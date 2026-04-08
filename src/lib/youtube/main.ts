import { mount } from "svelte";
import App from "./App.svelte";

const app = mount(App, {
    // biome-ignore lint/style/noNonNullAssertion: <>
    target: document.getElementById("app")!
});

export default app;
