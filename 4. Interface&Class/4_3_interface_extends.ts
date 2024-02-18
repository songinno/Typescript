/* 1. 인터페이스 확장 */

interface Dog {
    name: string;
    readonly age: number;
}

interface BornDog extends Dog {
    birthDay: Date;
}

const puppy: BornDog = {
    name: "멍멍이",
    age: 1,
    birthDay: new Date()
}

/* 2. 다수 인터페이스 화장 */

interface ElecticDevice {
    voltage: number;
}

interface SquareShapre {
    width: number;
    height: number;
}

interface Laptop extends ElecticDevice, SquareShapre {
    color: string;
}

const macbook13: Laptop = {
    voltage: 220,
    width: 30,
    height: 21,
    color: 'black'
}