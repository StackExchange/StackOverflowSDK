// Main Stack Overflow
import StackOverflowSDK from "./index";

const sdk = new StackOverflowSDK({ 
  accessToken: 'j5QMXkmjpAeNbhlW9VX0ew))'
});

const answers = await sdk.answers.create(920,
  { 'body': 'Hola'}
)

console.log(answers)