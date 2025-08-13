import { StackOverflowSDK } from './src'
import { FixedIsomorphicFetchHttpLibrary } from './src/helper/fixedHttpLibrary'

// Wrap everything in an async IIFE (Immediately Invoked Function Expression)
(async () => {
    const sdk = new StackOverflowSDK({
        accessToken: 't7zc5InEjMzlvHWUd))',
    })

    const questions = await sdk.questions.getAll()

    console.log(questions)
})()