export function getFile(squareIndex: number): string {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const letterIndex = squareIndex % 8;

    return letters[letterIndex];
}
