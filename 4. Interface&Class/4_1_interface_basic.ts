/* 인터페이스 */
interface Test {
    name: string;
    height: number;
}

// ! 읽기 전용 속성 또는 선택 속성으로 정의 가능
interface User2 {
    name: string;
    readonly height: number;
    favoriteLanguage?: string;
}

const author: User2 = {
    name: '안재홍',
    height: 176
};
// author.height = 180;
// error TS2540: Cannot assign to 'height' because it is a read-only property.

// ! 일부 속성 제거한 새로운 인터페이스 정의
interface DisplayUser2 extends Omit<User2, 'height' | 'favoriteLanguage'> {}

const displayUser2: DisplayUser2 = {
    name: '이승철'
}

// ! 인터페이스 중복
interface Admin {
    name: string;
    privileges: string[];
}

interface Admin {
    age: number;
}

const adminUser: Admin = {
    name: '관리자',
    privileges: ['a', 'b'],
    age: 30
}

/* 1. 함수 인터페이스 */
interface GetUserName {
    // 호출 시그니처
    (user: User2): string;
}

const userName: GetUserName = function (user) {
    return user.name;
}

console.log(userName(author)); // 안재홍

// ! 인터페이스에서의 매개변수 이름과 함수 실제 함수 정의 시 매개변수 이름이 같을 필요는 없다.
const userName2: GetUserName = function(u) {
    return u.name;
}

/* 2. 하이브리드 타입 */
// ! 호출 시그니처와 속성 타입을 동시에 갖는 인터페이스
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


