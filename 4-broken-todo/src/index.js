import TodoApp from './TodoApp'

/*
## Part 4 - Broken Todo

URL: http://localhost:3000/4-broken-todo/

Fix the todo app to work as expected:

1. Add a todo
2. Toggle a todo
3. Remove a todo

without any errors in the console.
*/

const app = new TodoApp()
app.render()
app.focusTodoInput()

if (module.hot) {
  module.hot.accept('./TodoApp', () => {
    const app = new TodoApp()
    app.render()
  })
}
