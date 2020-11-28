// array1.length <= 100;
// array1.length > 100 -> BigArray

// Main Parent Strategy
export abstract class Sorter {
    constructor() {}
    sort(data: number[]): void {}
}

// Strategy1 extends Strategy
export class BubbleSorter extends Sorter {
    constructor() {
        super();
    }

    sort(data: number[]) {
        const n = data.length;
        // O(n^2),  I(n*n) -> n*n
        setTimeout( () => console.log(`BubbleSorter finished in ${n*n} ms!`), n*n);
    }
}

// Strategy2 extends Strategy
export class QuickSorter extends Sorter {
    constructor() {
        super();
    }

    sort(data: number[]) {
        const n = data.length; 
        // O(n*log(n)), I(n*log(n)) -> n*log(n);
        setTimeout(() => console.log(`QuickSorter finished in ${n*Math.log10(n)} ms!`), n*Math.log10(n));
    }
}