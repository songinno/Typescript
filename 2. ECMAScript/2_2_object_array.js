/* 1. 비구조화 할당 */

// * 배열의 비구조화 할당
const arr1 = [1,2];
const a1 = arr1[0];
const b1 = arr1[1];

// ! ES6부터 위의 코드를 간결하게 쓸 수 있음
const arr2 = [1,2];
const [a2, b2] = arr2;
console.log(`a2: ${a2}, b2: ${b2}`); // a2: 1, b2: 2

// ! 좌항 배열이 우항 배열보다 큰 length를 갖고 있을 경우, undefined 할당
const arr3 = [3];
const [a3, b3] = arr3;
console.log(`a3: ${a3}, b3: ${b3}`);