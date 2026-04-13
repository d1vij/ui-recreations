import { resolve } from "$app/paths";
import type { Pathname } from "$app/types";

// TODO: add some formatting/styling to these
const info = {
    [resolve("/7guis/Counter")]:
        "The task is to build a frame containing a label or read-only textfield T and a button B. Initially, the value in T is “0” and each click of B increases the value in T by one. Counter serves as a gentle introduction to the basics of the language, paradigm and toolkit for one of the simplest GUI applications imaginable. Thus, Counter reveals the required scaffolding and how the very basic features work together to build a GUI application. A good solution will have almost no scaffolding.",
    [resolve("/7guis/Temperature-Converter")]:
        "The task is to build a frame containing two textfields TC and TF representing the temperature in Celsius and Fahrenheit, respectively. Initially, both TC and TF are empty. When the user enters a numerical value into TC the corresponding value in TF is automatically updated and vice versa. When the user enters a non-numerical string into TC the value in TF is not updated and vice versa. The formula for converting a temperature C in Celsius into a temperature F in Fahrenheit is C = (F - 32) * (5/9) and the dual direction is F = C * (9/5) + 32. Temperature Converter increases the complexity of Counter by having bidirectional data flow between the Celsius and Fahrenheit inputs and the need to check the user input for validity. A good solution will make the bidirectional dependency very clear with minimal boilerplate code.",
    [resolve("/7guis/Flight-Booker")]: "3",
    [resolve("/7guis/Timer")]: "4",
    [resolve("/7guis/Circle-Drawer")]: "5",
    [resolve("/7guis/Cells")]: "6",
} as const satisfies Partial<Record<Pathname, string>>;

export default info;
