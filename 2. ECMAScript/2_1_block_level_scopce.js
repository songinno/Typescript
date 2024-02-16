/* 1. 함수 수준 스코프 */

function foo() {
    var abc = 123;
    if (true) {
        var abc = 456;
    }
    console.log(abc);
}

foo(); // 456

function foo2() {
    var def = 123;
    // ! JavaScript는 해당 코드를 감싸고 있는 가장 가까운 함수(또는 전역)이 달라질 때에만 새로은 스코프 생성
    function bar() {
        var def = 456;
    }
    console.log(def);
}

foo2(); // 123

/* 2. 호이스팅 */

function foo3() {
    console.log(bar2);
    var bar2 = 123;
}

foo3(); // undefined (오류 없이 실행됨, 아래와 같이 JavaScript 엔진이 해석하기 때문)

// JavaScript 엔진의 해석
function foo3() {
    var bar2;
    console.log(bar2);
    bar2 = 123;
}

console.log("========== 3. let과 const ==========");
/* 3. let과 const */

// * let을 이용한 선언

{
    let goOut = true;
    if (true) {
        let goOut = false;
    }
    console.log(goOut); // true
    goOut = false;
    console.log(goOut); // false
}
// console.log(goOut); // ReferenceError: goOut is not defined

function ok() {
    var a = 1;
    var a = 2;
    console.log(a);
}

/* function notOk() {
    let a = 1;
    let a = 2;
    console.log(a);
} */

ok(); // 2
// notOk(); // SyntaxError: Identifier 'a' has already been declared

// * const를 이용한 선언

// ! 재할당이 불가능할 뿐, 불변값은 아니다.
const a = 3;
// a = 4; // TypeError: Assignment to constant variable.

const obj = {};
obj.a = 42;
console.log(obj); // { a: 42 }

const arr = [];
arr.push(3);
console.log(arr); // [ 3 ]