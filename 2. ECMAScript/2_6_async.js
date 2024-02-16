/* 1. 프로미스 */

function getRandomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const destiny = Math.random();
            if (destiny > 0.5) resolve();
            else reject();
        })
    });
}

// * 프로미스의 then과 catch 메서드
// ! 네트워크 요청이 성공적으로 끝난 경우 -> 서버가 넘긴 응답을 인자로 resolve()를 호출
fetch('http://example.com').then(respose => {
    const {ok, status} = respose;
    console.log(ok, status); // true 200
});

// ! 네트워크 요청을 보내는 과정에서 오류 발생 시 -> 내부적으로 던져진 에러를 인자로 reject()를 호출
fetch('https://this-is-invalid-url.really').catch(err => { 
  const { message } = err;
  console.log(message); // fetch failed
});

// ! then 핸들러는 실제로는 2개의 콜백을 인자로 받음
// 두 번째 콜백 : 에러가 발생했을 때 실행, 에러 객체를 인자로 받는다.
fetch('https://this-is-invalid-url.really').then(null, err => { 
  const { message } = err;
  console.log(message); // fetch failed
});

// * 프로미스 체인
fetch('http://example.com').then(response => {
    const {status} = response;
    return status;
}).then(status => {
    console.log('The request has status ' + status); // The request has status 200
});


/* 2. async, await */

async function returnTheAnswer() {
    return 42;
}
const implicitlyReturnedPromise = returnTheAnswer();
console.log(implicitlyReturnedPromise instanceof Promise); // true
implicitlyReturnedPromise.then(answer => console.log(answer)); // 42

async function asyncExample() {
    const a = await new Promise(resolve => resolve(42));
    const b = await 42;
    let c;
    try {
        c = await new Promise((_, reject) => reject('Error on await'));
    } catch (e) {
        console.log(e);
    }
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
asyncExample();