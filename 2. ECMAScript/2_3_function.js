/* 1. 기본 매개변수 */;
console.log("========== 기본 매개변수 ==========");
// ! Javascript의 느슨한 매개변수 개수 체크
function looseCheck(a,b,c) {
    console.log([a,b,c]);
}
looseCheck(1,2,3); // [ 1, 2, 3 ]
looseCheck(1,2); // [ 1, 2, undefined ]
looseCheck(1); // [ 1, undefined, undefined ]


// ! 기본 매개변수
function useDefaultES6(a = 1, b = 2, c = 3) {
    console.log([a,b,c]);
}
useDefaultES6(1,2,3); // [ 1, 2, 3 ]
useDefaultES6(1,2); // [ 1, 2, 3 ]
useDefaultES6(1); // [ 1, 2, 3 ]

/* 2. 화살표 함수 */
console.log("========== 화살표 함수 ==========");
// ! JavaScript this 바인딩
var name = "asdf";

function getName() {
    console.log(this.name);
}

const a = {
    name: 'javascript',
    getName: getName
};

function getNames() {
    a.getName(); // javascript
    getName(); // asdf
}
getNames();

// ! 화살표 함수
const cat = {
    name: 'meow',
    bar1: function() {
        const bar2 = function() {
            console.log(this.name);
        }
        bar2();
    },
    foo1: function() {
        // 메서드의 내부 함수를 화살표 함수로 선언
        const foo2 = () => {
            console.log(this.name);
        }
        foo2();
    }
};
cat.bar1(); // undefined
cat.foo1(); // meow

// ! 화살표 함수를 사용하면 안되는 경우
// * 1) 메서드
const cat2 = {
    name: 'meow',
    callName: () => {
        console.log(this.name);
    }
}
// callName 메서드의 this 
// - 자신을 호출한 객체 cat2가 아닌, 함수 선언 시점의 상위 스코프인 전역 객체를 가리키게 됨
cat2.callName(); // undefined

// * 2) 생성자 함수
// 화살표 함수는 생성자 함수로 사용 불가
const Person = () => {};
// const person = new Person(); // TypeError: Person is not a constructor