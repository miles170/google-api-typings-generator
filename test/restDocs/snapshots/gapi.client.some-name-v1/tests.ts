/* This is stub file for gapi.client.some-name-v1 definition tests */
// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator

// Revision: undefined

gapi.load('client', async () => {
    /** now we can use gapi.client */

    await gapi.client.load('http://x.com/');
    /** now we can use gapi.client.thirdNamespace */

    run();

    async function run() {
        await gapi.client.thirdNamespace.firstResource.firstMethod();
    }
});
