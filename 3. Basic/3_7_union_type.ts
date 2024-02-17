function square(value: number, returnString: boolean = false): number | string {
    const squared = value * value;
    if (returnString) {
        return squared.toString();
    }
    return squared;
}

const stringOrNumber: string | number = square(5);
console.log(stringOrNumber); // 25

// ! 여러 줄에 걸친 유니온 타입
type VariousType
    = string
    | number
    | boolean;

// ! 유니온 타입의 맨 앞에도 파이프 사용 허용
type VariousType2 = 
    | string
    | number
    | boolean;
