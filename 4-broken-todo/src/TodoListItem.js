class TodoListItem {
  constructor(text, isResolved = false) {
    this.item = {
      id: `${Math.random()}`, //random id
      text,
      isResolved,
    };
  }

  toggle() {
    item.isResolved = !item.isResolved;
  }

  getItem() {
    return this.item;
  }
}

export default TodoListItem;
