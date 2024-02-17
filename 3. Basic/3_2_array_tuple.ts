/* 1. 배열 */

const pibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const myFavoriteBeers: string[] = ['Imperial Stout', 'India Pale Ale', 'Weizenbock'];

const pibonacci2: Array<number> = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const myFavoriteBeers2: Array<String> = ['Imperial Stout', 'India Pale Ale', 'Weizenbock'];

/* 2. 튜플 */
const nameAndHeight: [string, number] = ['안희종', 176];

// const invalidNameAndHeight: [string, number] = ['안희종', 176, 42];
// error TS2322: Type '[string, number, number]' is not assignable to type '[string, number]'.

// ! 튜플 타입의 값을 Array 프로토타입의 메서드를 통해 조작 가능
const validNameAndHeight: [string, number] = ['안희종', 176];
validNameAndHeight.push(42);
console.log(validNameAndHeight); // [ '안희종', 176, 42 ]
