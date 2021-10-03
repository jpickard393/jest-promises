
describe('Examples', () => {
    // The above test will incorrectly show as a pass, 
    // because Jest is not aware that we are doing an asynchronous operation.
    test('should not pass', () => {
        const p = Promise.resolve(false);

        p.then(value => {
            //This will result in UnhandledPromiseRejectionWarning: Unhandled promise rejection
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

    // Use async and await to let jest know we are dealing with async code.
    // It then mplicitly makes a function to return a promise, so no need to return.expect
    test.only('shows how async / await works', async () => {
        const value = await Promise.resolve(true);
        expect(value).toBe(true);
    });
});








