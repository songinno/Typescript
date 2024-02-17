type UUID = string;
type Height = number;
type AnotherUUID = UUID;
type User = {
    name: string;
    height: number;
};

//! 별칭은 단순히 이름을 붙일 뿐, 새로운 실제 타입이 생성되는 것이 아님
function getUser(uuid: UUID) {
    // 함수 본문
}
// getUser(123); //  error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
