import TodoListItem from './TodoListItem'

class TodoList {
  constructor(texts = []) {
    this.list = texts.map((text) => {
      const todoListItem = new TodoListItem(text)
      return todoListItem.getItem()
    })
  }

  add(text) {
    if (!text) return
    const todoListItem = new TodoListItem(text)
    this.list.push(todoListItem.getItem())
  }

  toggle(itemId) {
    this.list.forEach((todoListItem) => {
      if (todoListItem.id === itemId) {
        todoListItem.isResolved = !todoListItem.isResolved
      }
    })
  }

  remove(itemId) {
    this.list = this.list.filter((listItem) => {
      return listItem.id !== itemId
    })
  }

  getList() {
    return this.list
  }
}

export default TodoList
