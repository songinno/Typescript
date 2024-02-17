/* 1. 동기 부여 */
/* function getFirstElem(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('getFirstElemOrNull: Arguments is not array!');
    }
    if (arr.length === 0) {
        throw new Error('getFirstElemOrNull: Argument is an empty array!');
    }
    return arr[0] ? arr[0] : null;
} */

// ! 함수 타입 정의 : 문자열과 숫자 두 타입만 지원 -> 오버로딩
// 타입 시그니처 정의
function getFirstElem2(arr: string[]): string;
function getFirstElem2(arr: number[]): number;
// 함수 구현
function getFirstElem2(arr: any) {
    if (!Array.isArray(arr)) {
        throw new Error('getFirstElemOrNull: Arguments is not array!');
    }
    if (arr.length === 0) {
        throw new Error('getFirstElemOrNull: Argument is an empty array!');
    }
    return arr[0] ? arr[0] : null;
}

/* 2. 타입 변수 */
type MyArray<T> = T[];
type MyNumberArray = MyArray<number>;
type MyStringArray = MyArray<string>;
const numbs: MyNumberArray = [1,2,3,4,5];
const strs: MyStringArray = ["a", "b", "c"];

/* 3. 제너릭 함수 */
// ! 타입 변수를 이용해 제너릭 함수 정의
function getFirstElem3<T>(arr: T[]): T | null {
    if (!Array.isArray(arr)) {
        throw new Error('getFirstElemOrNull: Arguments is not array!');
    }
    if (arr.length === 0) {
        throw new Error('getFirstElemOrNull: Argument is an empty array!');
    }

    return arr[0] ? arr[0] : null;
}

const languages: string[] = ['TypeScript', 'JavaScript'];
const language = getFirstElem3<string>(languages);
console.log(language); // TypeScript

// ! 제너릭 타입 별칭
const drinks: MyArray<string> = ['Coffee', 'Milk', 'Beer'];