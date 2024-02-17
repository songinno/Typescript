/* 동기 부여 */
// * 프로그래머를 나타내는 타입
type Programmer = {favoriteLanguage: string};
const programmer: Programmer = {favoriteLanguage: 'TypeScript'};

// * 맥주를 좋아하는 사람의 타입
type BeerLover = {favoriteBeer: string};
const beerLover: BeerLover = {favoriteBeer: 'Imperial Stout'};

// ** 맥주를 좋아하는 프로그래머 타입
type BeerLovingProgrammer = {favoriteLanguage: string; favoriteBeer: string};
const hong: BeerLovingProgrammer = {
    favoriteLanguage: 'TypeScript',
    favoriteBeer: 'Imperial Stout'
};

/* 인터섹터 타입 */
type BeerLovingProgrammer2 = Programmer & BeerLover;

const hong2: Programmer & BeerLover = {
    favoriteLanguage: 'TypeScript',
    favoriteBeer: 'Imperial Stout'
};

const hong3: BeerLovingProgrammer2 = {
    favoriteLanguage: 'TypeScript',
    favoriteBeer: 'Imperial Stout'
};

// ! 여러 줄에 걸쳐 적은 인터섹션 타입
type Infeasible
    = string
    & number;
    
type Infeasible2 = 
    & string
    & number;