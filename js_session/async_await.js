//  Async/Await
async function fetchData() {
    try {
        let response = await new Promise((resolve) => {
            setTimeout(() => resolve('Data fetched!'), 1000);
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
