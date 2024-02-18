/* 1. 숫자 열거형(Numeric Enum) */
enum Direction {
    East,
    West,
    South,
    North
}

enum ExplicitDirection {
    East = 0,
    West = 1,
    South = 2,
    North = 3
}

const south: Direction = Direction.South;
console.log(south); // 2

const south2: ExplicitDirection = ExplicitDirection.South;
console.log(south2); // 2

// * 멤버 값 초기화
enum InitializedDirection {
    East = 2,
    West = 4,
    South = 6,
    North = 8
}

// ! 초기화 하지 않은 멤버 -> 이전에 초기화된 멤버 값부터 순차적으로 증가해서 결정
enum InitializedDirection2 {
    East = 2,
    West, // 3
    South = 6,
    North // 7
}
console.log(InitializedDirection2.West); // 3
console.log(InitializedDirection2.North); // 7

/* 2. 문자열 열거형(String Enum) */
enum Direction2 {
    East = 'EAST',
    West = 'WEST',
    South = 'SOUTH',
    North = 'NORTH'
}

enum Direction3 {
    East, // 0
    West, // 1
    South = 'SOUTH',
    North = 'NORTH' // 명시적으로 초기화 필수
}

/* 3. 상수 멤버와 계산된 멤버  */
//* 계산된 멤버
function getAnswer() {
    return 42;
}

enum SpecialNumbers {
    Answer = getAnswer(),
    // Mystery // error TS1061: Enum member must have initializer.
}

/* 4. 런타임에서의 열거형 */

// ! const enum
// 모든 멤버가 컴파일 시간에 알려진 상수값인 열거형의 경우 사용 가능
const enum ConstEnum {
    A,
    B = 2,
    C = B * 2,
    D = -C
}
console.log(ConstEnum.A); // 0

/* 5. 유니온 열거형(Union Enum) */

enum ShapeKind {
    Circle,
    Triangle = 2,
    Square
}

type Circle = {
    kind: ShapeKind.Circle;
    radius: number;
}

type Triangle = {
    kind: ShapeKind.Triangle;
    maxAngle: number;
}

type Square = {
    kind: ShapeKind.Square;
    maxLength: number;
}

type Shape = Circle | Triangle | Square;

const circle1: Shape = {kind: 0, radius: 100};
const triangle1: Shape = {kind: 2, maxAngle: 5};
const square1: Shape = {kind: 3, maxLength: 10};

/* 6. 유니온 타입을 이용한 열거형 표현 */
// ! 리터럴 타입
const answer: 42 = 42;
// const wrongAnswer: 42 = 24; // error TS2322: Type '24' is not assignable to type '42'.

// ! 리터럴 타입 + 유니온 타입 -> 열거형과 유사한 타입 생성 가능(열거형 표현)
type Direction4 = 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
const east: Direction4 = 'EAST';
console.log(east); // EAST

// const center: Direction4 = 'CENTER'; // error TS2322: Type '"CENTER"' is not assignable to type 'Direction4'.


enum Direction5 {
    East = 'EAST',
    West = 'WEST',
    South = 'SOUTH',
    North = 'NORTH'
}
// ! 리터럴 타입과 동일 (하나의 값만 갖는 타임: EAST2)
type EAST2 = Direction5.East;
const east2: EAST2 = Direction5.East;
console.log(east2); // EAST

// ! 열거형 표현과 동일
const east3: Direction5 = Direction5.East;
console.log(east3); // EAST

