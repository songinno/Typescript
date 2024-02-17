/* 1. 불리언 */
const isTypeScriptAwesom: boolean = true;
const doesJavaScriptHasTypes: boolean = false;

/* 2. 숫자 */
const yourScore: number = 100;
const ieee754sAwesome: number = 0.1 + 0.2;

/* 3. 문자열 */
const authorName: string = '안희종';
const toReaders: string = `
책을 읽어주셔서 감사합니다.
도움이 되었으면 좋겠습니다.
`;

/* 4. null / undefined */
const nullValue: null = null;
const undefinedValue: undefined = undefined;
// const numberValue: number = null; // // TS2322: Type 'null' is not assignable to type 'number'

/* 5. 특별한 타입 */

// * any
let bool: any = true;
bool = 3;
bool = 'whatever';
bool = {};

// bool.nonExistingMethod();
// bool.whatever(false);
// * void
function nothing(): void {}
// * never
function alwaysThrow(): never {
    throw new Error("I`m a wicked function!");
}