import TodoList from './TodoList'
import './TodoApp.css'

/*
## Part 4 - Broken Todo

URL: http://localhost:3000/4-broken-todo/

Fix the todo app to work as expected:

1. Add a todo
2. Toggle a todo
3. Remove a todo

without any errors in the console.
*/

class TodoApp {
  constructor() {
    this.todoList = new TodoList(['Add a New Todo'])
    this.rootElement = document.getElementById('app')
  }

  clear() {
    this.rootElement.innerHTML = ''
  }

  renderTodoItem(item) {
    const todoItemText = document.createElement('div')
    todoItemText.className = item.isResolved
      ? 'todo-item-text resolved'
      : 'todo-item-text'
    todoItemText.innerHTML = item.text

    const todoItemToggleButton = document.createElement('button')
    todoItemToggleButton.innerHTML = 'toggle'

    todoItemToggleButton.onclick = () => {
      this.todoList.toggle(item.id)
      this.render()
    }

    const todoItemDeleteButton = document.createElement('button')
    todoItemDeleteButton.innerHTML = 'delete'
    todoItemDeleteButton.onclick = () => {
      this.todoList.remove(item.id)
      this.render()
    }

    const buttonContainer = document.createElement('div')
    buttonContainer.appendChild(todoItemToggleButton)
    buttonContainer.appendChild(todoItemDeleteButton)

    const todoItem = document.createElement('li')
    todoItem.className = 'todo-item'
    todoItem.appendChild(todoItemText)
    todoItem.appendChild(buttonContainer)

    this.rootElement.children[1].appendChild(todoItem)
    this.rootElement.children[1].appendChild(document.createElement('br'))
  }

  renderTodoInput() {
    this.todoTextInput = document.createElement('input')
    this.todoTextInput.type = 'text'
    this.todoTextInput.className = 'todo-text-input'

    const todoSubmitButton = document.createElement('input')
    todoSubmitButton.type = 'submit'
    todoSubmitButton.value = 'add'

    const todoInput = document.createElement('form')
    todoInput.className = 'todo-input'
    todoInput.onsubmit = (e) => {
      e.preventDefault()
      this.todoList.add(this.todoTextInput.value)
      this.render()
      this.focusTodoInput()
    }
    todoInput.appendChild(this.todoTextInput)
    todoInput.appendChild(todoSubmitButton)

    // create a ul for accessibility
    const ul = document.createElement('ul')
    ul.id == 'container'

    this.rootElement.appendChild(todoInput)
    this.rootElement.appendChild(ul)
  }

  focusTodoInput() {
    this.todoTextInput.focus()
  }

  render() {
    this.clear()
    this.renderTodoInput()
    this.todoList.getList().forEach((item) => {
      this.renderTodoItem(item)
    })
  }
}

export default TodoApp
