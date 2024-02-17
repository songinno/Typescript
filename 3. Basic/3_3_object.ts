/* 1. 객체 타입 */

const user: {name: string, age: number} = {name: '홍길동', age: 35};

const animal: {name: string; kind: string} = {name: '멍멍이', kind: '똥개'};

/* 2. 선택 속성 */
const userWithUnknownHight: {name: string, height?: number} = {name: "홍길동"};
console.log(userWithUnknownHight); // { name: '홍길동' }

userWithUnknownHight.height = 30;
console.log(userWithUnknownHight); // { name: '홍길동', height: 30 }

/* 3. 읽기 전용 속성 */
const user2: {readonly name: string; height: number} = {name: '안희종', height: 176};
// user2.name = '홍길동'; // error TS2540: Cannot assign to 'name' because it is a read-only property.
user2.height = 200;
console.log(user2); // { name: '안희종', height: 200 }

