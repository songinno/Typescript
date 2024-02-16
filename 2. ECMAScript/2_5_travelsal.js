/* 기존 JavaScript의 원소 순회 */

const langs = ['TypeScript', 'JavaScript', 'Python'];

// for문
for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);    
}
// for-in
for (const index in langs) {
    console.log(langs[index]);
}

console.log("====================");
/* 1. forEach */
langs.forEach(l => {
    console.log(l);
});


console.log("====================");
/* 2. for-of */
const numbers = [0, 1, 2, 3, 4, 5];
// ! for-in에서의 elem
for (const num in numbers) {
    console.log(typeof(num)); // string
    break;
}

// ! for-of에서의 elem
for (const num of numbers) {
    console.log(typeof(num)); // number
    break;
}

// ! 임의의 Object 인스턴스에 대해 사용 불가
/* const obj = {a: 1, b: 2};
for (const o of obj) {
    console.log(o); // TypeError: obj is not iterable
} */

console.log("====================");
/* 3. 이터레이터 프로토콜 */
// ! 이터레이터 생성
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length
                ? {value: array[nextIndex++], done: false}
                : {done: true}
        }
    }
}

const iter = makeIterator([1,2,3]);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { done: true }

console.log("===============");
/* 4. 이터러블 프로토콜 */
// ! 이터러블 프로토콜(순회가능 객체) 구현
const iterableObj = {
    [Symbol.iterator]() {
        return makeIterator([1,2,3]);
    }
};

// ! 순회가능 객체는 for-of 사용 가능
for (const elem of iterableObj) {
    console.log(elem);
}

// ! 전개 연산자 사용 가능

console.log(...iterableObj); // 1 2 3

