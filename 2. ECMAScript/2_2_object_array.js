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
console.log(`a3: ${a3}, b3: ${b3}`); // a3: 3, b3: undefined

console.log("---------------------------");
// * 객체의 비구조화 할당
const obj1 = {aa1: 1, bb1: 2};
// const aa1 = obj1.aa1;
// const bb1 = obj1.bb1;


// ! 위의 코드 2줄을 한줄로 표현 가능
const {aa1, bb1} = obj1;

console.log(`aa1: ${aa1}, bb1: ${bb1}`);

// ! 없는 속성을 참조할 경우, undefined 할당
const {cc1} = obj1;
console.log(`cc1: ${cc1}`); // undefined

// ! 기본값 설정
const obj2 = {dd1: 3};
const {dd1, ee1 = 5} = obj2;
console.log(`dd1: ${dd1}, ee1: ${ee1}`); // dd1: 3, ee1: 5

// ! 다른 변수명으로 사용
const obj3 = {ff1 : 6};
const {ff1: newF} = obj3;
console.log(`newF: ${newF}`); // newF: 6

// ! 함수 인자에서의 비구조화 할당
// 인자가 객체
function useless({a, b}) {
    console.log(a, b);
}
useless({a: 1, b: 2}); // 1 2

// 인자가 배열
function useless2([first, second]) {
    console.log(first, second);
}

useless2([3, 4]); // 3, 4

/* 2. 나머지 연산자와 전개 연산자 */
// * 나머지 연산자
// 비구조화 할당을 사용하되, 배열의 일부 부분 배열을 다른 변수에 할당하고자 할 때
const [dogs, ...cats] = ['진돗개', '검은고양이', '흰고양이'];
console.log(cats); // [ '검은고양이', '흰고양이' ]

// ! 함수 인자에서의 사용
function normalFunc(p1, p2, ...rest) {
    console.log(rest);
}
normalFunc(1,2,3,4,5); // [3,4,5]

// * 전개 연산자
// 여러 개의 변수가 들어갈 자리에, 한 배열의 원소들을 분포시키고자 할 때
function logThings(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const arr = [1,2,3];
logThings(...arr);
// 1
// 2
// 3

/* 3. 객체 리터럴 변경사항 */
// * 트레일링 콤마
const objWithTrailingComma = {
    a: 1,
    b: 1,
  };

// * 단축 속성명
const [a, b] = [1,2];

const obj4 = {a: a, b: b};
console.log(obj4); // { a: 1, b: 2 }

const obj5 = {a, b}; // {a: a, b: b}와 동일
console.log(obj5); // { a: 1, b: 2 }

// * 단축 메서드명
// old
const objWithFunction = {
    name: "hihi",
    f: function() {console.log(this.name + 1);}
};
objWithFunction.f(); // hihi1

// new
const objWithFunction2 = {
    name: "hihi",
    f() {console.log(this.name + 2);}
}
objWithFunction2.f(); // hihi2

// * 계산된 속성 이름
const name = 'heejong';
const obj6 = {[name]: 'ahn'};
console.log(obj6); // { heejong: 'ahn' }

const obj7 = {['abc' + 'def']: 3};
console.log(obj7); // { abcdef: 3 }