import { StackOverflowSDK } from './src'

// Wrap everything in an async IIFE (Immediately Invoked Function Expression)
(async () => {
    const sdk = new StackOverflowSDK({
        baseUrl: 'https://support-test-teams.stackenterprise.co/api/v3',
        accessToken: 'B6ayyI2ag5zFXGjDXlvZdw))',
    })

    const questions = await sdk.articles.getByAuthor(1)

    console.log(questions)
})()