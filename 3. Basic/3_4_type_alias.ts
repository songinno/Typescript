type UUID = string;
type Height = number;
type AnotherUUID = UUID;
type User = {
    name: string;
    height: number;
    email: string;
};

//! 별칭은 단순히 이름을 붙일 뿐, 새로운 실제 타입이 생성되는 것이 아님
function getUser(uuid: UUID) {
    // 함수 본문
}
// getUser(123); //  error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

/* 타입 별칭 내 속성에서 일부 제외 */
type DisplayUser = Omit<User, 'height' | 'email'>;

const displayUser: DisplayUser = {
    name: '임꺽정'
};
