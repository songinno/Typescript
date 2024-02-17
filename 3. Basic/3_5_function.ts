/* 1. 함수의 타입 */
function sum(a: number, b: number): number {
    return a + b;
}

function printAnything(s: string): void {
    console.log(s);
}

/* 2. 함수 값의 타입 표기 */
const yetAnotherSum: (a: number, b: number) => number = sum;

const onePluseOne: () => number = () => 2;

const arrowSum: (a: number, b: number) => number = (a, b) => a + b;

console.log(arrowSum(1, 2));

// ! 타입 별칭 사용 가능
type SumFunction = (a: number, b: number) => number;
const definitelySum: SumFunction = (a, b) => a + b;

/* 3. 기본 매개변수 */
function greetings2(name: string = 'stranger'): void {
    console.log(`Hello, ${name}`);
}
greetings2(); // Hello, stranger

/* 4. 선택 매개변수 */
function fetchVideo(url: string, subtitleLanguage?: string): void {
    const option: any = {url};
    if (subtitleLanguage) {
        option.subtitleLanguage = true;
    }
}

fetchVideo('https://example.com', 'ko');
fetchVideo('https://example.com');

// ! 매개변수 정의 순서에서, 선택 매개변수 이후 필수 매개변수를 두는 것은 허용되지 않음
/* function invalidFetchVideo(subtitleUrl?: string, url: string): void {
    // ....
} */
// error TS1016: A required parameter cannot follow an optional parameter.

/* 5. 함수 오버로딩 */
function doubleString(str: string): string {
    return `${str}${str}`;
}

function doubleNumber(num: number): number {
    return (num * 2);
}

function doubleBooleanArray(arr: boolean[]): boolean[] {
    return arr.concat(arr);
}

// ! 오버로딩을 이용하여, 위의 3 함수를 하나의 함수로 합치기
// * 타입 시그니처 정의
function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];

// * 함수 본문 구현
function double(arg: any) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`;
    } else if (typeof arg === 'number') {
        return (arg * 2);
    } else if (Array.isArray(arg)) {
        return arg.concat(arg);
    }
}

const num = double(3);
console.log(num); // 6

const str = double('abc');
console.log(str); // abcabc

const arr = double([true, false]);
console.log(arr); // [ true, false, true, false ]

/* 6. this 타입 */
interface HTMLElement {
    tagName: string;
    // ...
}

interface Handler {
    (this: HTMLElement, event: Event, callback: () => void): void;
}

let cb: any;
// 실제 함수 매개변수에는 this가 나타나지 않음
const onClick: Handler = function(event, cb) {
    // this는 HTMLElement 타입
    console.log(this.tagName);
    cb();
}

// ! this의 타입을 void로 명시 -> 함수 내부에서 this에 접근하는 것을 막을 수 있음
interface NoThis {
    (this: void): void;
}

const noThis: NoThis = function() {
    console.log(this.a);
}