// No need to reset inner accordion's state when closing the outer ones
// as the whole accordion-content block is remounted, causing creation of
// new Symbols for each inner accordion
export class AccordionState {
    private active: symbol;

    constructor() {
        this.active = $state(Symbol());
    }

    /**
     * Registers a new accordion item and returns a symbol to identify it
     */
    public create(key?: string) {
        const symbol = Symbol(key);
        return symbol;
    }

    /**
     * Sets the passed symbol as currently active/open accordion
     */
    public set(symbol: symbol) {
        this.active = symbol;
    }

    /**
     * Unsets the currently acitve/open accordion. Use when all accordions should be closed.
     */
    public unregister() {
        this.active = Symbol();
    }

    /**
     * Whether the passed symbol corresponds to the active symbol
     */
    public isOpen(symbol: symbol): boolean {
        return this.active === symbol;
    }
}
