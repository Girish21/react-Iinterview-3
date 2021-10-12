# React

## Introduction

Welcome to this live coding exercise. Today we'll be building a type-ahead/autocomplete component in React :)

The exercises are designed to test your core understanding of web fundamentals (HTML, CSS, JS) and React.
There are four tasks in total, building a common, typesafe async hook that handles all the async logic in the app, building a hook that handles querying the server in a performant way when typing in the type-ahead box, incorporating the hooks and building out the basic type-ahead component, using a library to add accessibility to the type-ahead box

## Tasks

### `useAsync`

You can find the starter code and the requirements for our first custom hook at `src/hooks/useAsync.ts`. The goal of the hook is to handle all the async logic and provide a simple API for the user to effortlessly handle async operations in the app with proper type safety. More information is provided in the file.

### `useTypeahead`

This is our second custom hook. This will help us in managing the state of the type-ahead input field and as well as handle a very important optimization that is essential for the component to work seamlessly. You can find the started code at `src/hooks/useTypeahead.ts`. As always, the hook should be type-safe.

### Typeahead

Let's work on building the component which utilizes both the custom hooks. The goal is to build a simple type-ahead component that accepts inputs from the user, fetches relevant data from the API, and generates a list of options for the user. From which the user can select an option and the selected option should auto-fill the type-ahead input.

We are also provided with a country data set which of the type

```ts
type Resp = {
  countries: {
    code: string
    label: string
    phone: string
  }[]
}
```

and, is available at the API endpoint `http://localhost:4200/countries`.
The API has a required query parameter `q` and, the search term from the type-ahead should be passed to the API via this query parameter. The API also optionally accepts `count`, which controls the number of results returned from the server.

(The type-ahead component should be built as a generic component and should work with any type of data, and should not be built based on the above example API, which is only provided to test the working of the component)

### Extra credit

So our custom type-ahead is taking shape. But for the component to be accessible to all, what we have is not enough. We need to add special attributes to the markup to make it accessible and be a11y compliant. And to this by hand manually is tedious, and we can make use of special headless libraries which provide all the accessibility features and leaves the UI to us and we can style it as we wish.
One such library for building auto-complete/type-ahead components is [downshift](https://github.com/downshift-js/downshift). It provides simple hooks which we can take advantage of and build such complex components with ease and make it fully a11y compliant. Let's do that!

## End

Hope you enjoyed this coding session :)
