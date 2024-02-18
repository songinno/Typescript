const users = [
    {name: '안희종', height: 176, favoriteLanguage: 'TypeScript'},
    {name: '이방인', height: 200},
    {name: '없는 사람'}
]

/* 1. 색인 시그니처 */
interface NameHeightMap {
    [userName: string]: number | undefined;
}

const nameHeightMap: NameHeightMap = {};
users.map(user => {
    nameHeightMap[user.name] = user.height;
});

console.log(nameHeightMap); // { '안희종': 176, '이방인': 200 }

/* 2. 색인과 타입 */
//! string 색인과 number 색인이 동시에 존재할 경우
// 숫자로 색인 된 값의 타입(현재 boolean 자리)은 문자열로 색인 된 값의 타입(number)의 서브타입이어야 한다.
interface ErrorProne {
    [str: string]: number;
    // [num: number]: boolean;
    [num: number]: number; // number로는 가능
}

let errorProne: ErrorProne = {
    'abc': 3,
    3: true
}
errorProne[3];
// 타입 시스템은 boolean 타입의 값일 것이라 추측
// 색인 동작 방식에 의한 실제 값은 errorProne['3'] -> string 색인으로 접근 -> number 타입

// ! 기존에 string 색인 시그니처가 존재 
// -> 그 외 모든 속성의 value의 타입(name 옆 string)은 string로 색인된 값(nubmer)의 서브타입이어야 한다.
interface ErrorProne2 {
    [randomProp: string]: number;
    // name: string;
    name: number; // number로 가능
}

/* 3. 읽기 전용 색인 */
interface ReadOnlyNameHeightMap {
    readonly [name: string]: number;
}