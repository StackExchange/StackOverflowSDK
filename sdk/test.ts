import { StackOverflowSDK } from './src'
import { FixedIsomorphicFetchHttpLibrary } from './src/helper/fixedHttpLibrary'

// Wrap everything in an async IIFE (Immediately Invoked Function Expression)
(async () => {
    try { 
    const sdk = new StackOverflowSDK({
        accessToken: 't7zc5InEjMzlvHWUd))',
    })

    const questions = await sdk.questions.getAll()

    console.log(questions)
    }catch (error) {
        console.error('❌ Error name:', error.name)
        console.error('❌ Error message:', error.message)
        
        // Deep inspect the original error to find response details
        console.error('🔍 Original error structure:')
        console.error('  originalError:', error.originalError)
        console.error('  originalError.stack:', error.originalError?.stack)
        
        // Let's see what the auto-generated SDK actually captured
        console.error('🔍 Let me inspect the whole error object:')
        console.error(JSON.stringify(error, null, 2))
    }

})()