// Promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 5000);
});

promise.then(result => console.log(result)).catch(error => console.log(error));





function delayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved!');
        }, 5000);
    });
}

console.log(await delayedPromise());