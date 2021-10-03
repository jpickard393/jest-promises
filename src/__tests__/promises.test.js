
// The above test will incorrectly show as a pass, 
// because Jest is not aware that we are doing an asynchronous operation.
test('should not pass', () => {
    const p = Promise.resolve(false);

    //This will result in UnhandledPromiseRejectionWarning: Unhandled promise rejection
    p.then(value => {
        expect(value).toBe(true);
    })
})


// these functions use the resolve and reject methods of a promise.
// we have to return the assertion for this to use the promise.resolve or reject methods 
test('should resolve to some value', () => {
    const p = Promise.resolve('some value');
    return expect(p).resolves.toBe('some value');
});

test('should reject to error', () => {
    const p = Promise.reject('error');
    return expect(p).rejects.toBe('error');
});

test.only('shows how async / await works', async () => {
    const value = await Promise.resolve(true);
    expect(value).toBe(true);
});