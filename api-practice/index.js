function callApi() {
    const res = window.fetch('https://jsonplaceholder.typicode.com/users');
    console.log(res)
};
callApi();