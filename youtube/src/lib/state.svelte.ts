class AppState {
    public sidebarOpen: boolean;
    constructor() {
        this.sidebarOpen = $state(false);
    }
}

export const appstate = new AppState()
