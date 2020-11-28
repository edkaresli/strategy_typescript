import { SmallArray, BigArray } from './client.ts';

const tiny: number[] = [];

for (let i = 0; i < 100; i++) {
    tiny.push(500*Math.random());
}

const tinyArray = new SmallArray(tiny);

const bigger: number[] = [];

for (let i = 0; i < 1000; i++) {
    bigger.push(50000*Math.random());
}

const bigArray: BigArray = new BigArray(bigger);

tinyArray.sort();

bigArray.sort();