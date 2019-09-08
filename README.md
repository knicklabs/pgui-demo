# PGUI Demo

> Developing UIs with Procedurally-Generated Data

## THIS IS NOT PRODUCTION CODE

1. The code in this repostitory was developed for a talk. The public folder contains files from the Svelte 3 starter project. Everything I created for this demo is in `/src` and I encourage you to explore it and use the ideas presented here.
2. The only `npm` command you will find useful here is `npm run storybook`.
3. The `src/api/index.js` should conditionally load the real API or mock API. In Storybook it will load the Mock API. Unfortunately, Rollup.js has a lot of problems and the technique used here only appears to work with webpack. So if you are using Rollup your mileage will vary. After my experience here (though this is my first time using Svelte/Rollup) I would use webpack next time. (Storybook uses webpack and its totally fine).

## The Idea Behind This Demo

With those caveats out of the way, this is a demo application to illustrate how one might develop UIs using procedurally-generated data. This is not a proof-of-concept. I've used this technique to develop fully-functional prototypes against mock APIs without any server technology (Express is often used to build mock servers). These same prototypes were shipped to prod merely by flipping a bit so the Real API was used in place of the Mock API.

When I've done this previously it had been in React. This is my first time trying it with Svelte (and my first time using Svelte at all), but the principles are the same regardless of the framework. This idea should hold its own with most any approach to creating UIs.

Hopefully, this demo is easy to follow. There's a lot of things missing here, like request cancellation and proper error handling, plus the design is basic, but this keeps the focus on the architecture. In the `src/api` folder you will find a basic implemention of a mock-adapted API client which can be used, in certain environments,to intercept network requests and respond to them. The `MockAPI` handles creating responses in this demo. A real API does not exist, but if it conformed to this MockAPI then transitioning from the prototype to the actual app would be seemless. The `src/fixtures` folder contains some methods for procedurally generating member data which the `MockAPI` will consume and return. The Svelte components that consume data from a real or mock API can be found in `src/components`.

You'll find a few stories here in `src/stories`. All of the stories use procedurally-generated data. With the exception of the `App` story, the data is generated and fed to a component via props. This type of technique could be used to generate components in many configurations including potentially unforeseen ones. The `App` story is particularly special as we do not feed it data via props. Instead we mount the whole application in storybook and given the `STORYBOOK_API` environment variable is set to `mock`, the mock-adapted API is used. The `App` story can be used just as the finished app would be used; it simulates the real thing.

Developing UIs with procedurally-generated data is a useful technique for developing asynchronously with backend teams, developing interfaces in environments like Storybook, user-testing/prototyping, and automated testing of user interfaces with predictable and reproducable states.

## Getting Started

```
npm run storybook
```

Once again, THIS IS NOT PRODUCTION CODE.

Copyright (c) 2019 Nickolas Kenyeres <nickolas@knicklabs.com>.