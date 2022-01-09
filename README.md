# how react context works

1. create context

- we create a context using the function createContex()
  this is just a variable like themeContext
- then we have to create a themeProvider. this is a component. this
  component is used to wrap the child components so that they can use the context.
- both `ThemeContext` and `ThemeContextProvider` are exported from the same file.

2. apply it

- after we had create the `context` and the `context provider` we have to use it.
  to do this we have to wrap the App component with the `ContextProvider`.

3. use context

- in a _class based_ component we can use the context in two ways. one by using the static contextType variable in the class (we can only use one context this way) or my context.consumer (we can use multiple context this way)

- in functional component we can use the useContext hook. this also enables use to use multiple context in the same component
