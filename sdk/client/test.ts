// Main Stack Overflow
import StackOverflowSDK from ".";
import 'dotenv/config'

const sdk = new StackOverflowSDK({ 
  accessToken: process.env.ACCESS_TOKEN
});

const articles = await sdk.comments.getRecentComments('article', 20, )

console.log(articles)