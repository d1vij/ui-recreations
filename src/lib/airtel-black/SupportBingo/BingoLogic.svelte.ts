type BingoRow<T> = [T, T, T, T, T];
export type BingoGrid<T> = [BingoRow<T>, BingoRow<T>, BingoRow<T>, BingoRow<T>, BingoRow<T>];

export class Bingo {
    public readonly grid: BingoGrid<boolean>;
    public rowCount = 5;
    public colCount = 5;

    constructor() {
        const grid = Array.from({ length: this.rowCount }, () => {
            return Array.from({ length: this.colCount }, () => false);
        }) as BingoGrid<boolean>;

        this.grid = $state(grid);
        this.grid[2][2] = true;
    }

    public toggle(row: number, col: number) {
        if (row === col && row === 2) return;
        this.grid[row][col] = !this.grid[row][col];
    }

    public get(row: number, col: number) {
        return this.grid[row][col];
    }
}

export const bingo = new Bingo();
