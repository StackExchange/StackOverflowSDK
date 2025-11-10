---
title: Rate Limiting and Throttling
description: Understanding API throttling and rate limits for Stack Overflow Internal API v3.
---

Stack Overflow Internal API v3 uses request throttling to prevent abuse and ensure optimum performance for all users. We currently implement two different types of throttling to alleviate excessive API calls: burst throttle rate limiter (short-term) and token bucket rate limiter (long-term). Both throttling methods monitor the number of requests coming from each access token.

## Burst Throttle Rate Limiter

The burst throttle rate limiter engages when an access token makes too many requests during a brief window of time. The default for this limiter is **50 requests in a two-second interval**.

### Response Headers

The burst throttle rate limiter returns two headers with information about throttling status:

- **`x-burst-throttle-calls-left`** - The number of calls left in the time window before the throttle begins rejecting API calls
- **`x-burst-throttle-seconds-until-full`** - The number of seconds left in the throttle time window

## Token Bucket Rate Limiter

As its name implies, API v3's token bucket rate limiter manages a "bucket" of request tokens. Each API request consumes a token from the bucket. When API requests consume all the tokens in the bucket, API v3 will reject subsequent requests. API v3 refills the bucket with a set number of tokens each second. When the request token bucket is full, API v3 stops adding tokens. The default max tokens setting is 5000, with a refill rate of 100 tokens every 60 seconds.

### Response Headers

API v3 responses include three headers with information about the token bucket rate limiter status:

- **`x-token-bucket-calls-left`** - The number of tokens currently in the bucket
- **`x-token-bucket-seconds-until-full`** - The number of seconds until the token bucket is full (assuming no additional API calls)
- **`x-token-bucket-seconds-until-next-refill`** - The number of seconds until API v3 adds the next batch of tokens to the bucket

## User-Agent Header

To avoid having the API block or throttle your requests, make sure each API request includes a `User-Agent` header. The `User-Agent` string should be unique and descriptive. We recommend including your app name, URL, and email address in this format:

```
User-Agent: your_app_name/1.0 (http://your-app-url.com; your-email@somewhere.com)
```