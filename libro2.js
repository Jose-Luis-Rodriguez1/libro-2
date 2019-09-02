Promise.resolve(123)
    .then(function (res) {
    console.log(res); // 123
    return 456;
})
    .then(function (res) {
    console.log(res); // 456
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); // 123 : Notice that this `this` is called with the resolved
    value;
    return Promise.resolve(123);
});
