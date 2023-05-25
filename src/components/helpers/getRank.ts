export function getRank(squareIndex: number): number {
    return 9 - Math.ceil((squareIndex + 1) / 8);
}