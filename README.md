# Web team on-site interview questions

## Part 1 - Deck of Cards

Write the following three APIs

1. addCard - Adds a card to the deck
2. getCard - Gets a specific card from the deck
3. getRandomCard - Gets a random card from the deck

## Part 2 - Sum of Array

Write a function that returns minimum total cost of adding all array items with the following conditions:

1. You can only add two array items at once
2. Cost of adding two array items is equal to the sum of the two items

For example, given the array [ 1, 2, 3, 4 ]

- 1st iteration: Add 1 and 2, which costs 3 and yields [ 3, 3, 4 ]. Total cost is 3
- 2nd iteration: Add 3 and 3, which costs 6 and yields [ 6, 4 ]. Total cost is 3 + 6 = 9
- 3rd iteration: Add 6 and 4, which costs 10 and yields [ 10 ]. Total cost is 9 + 10 = 19
- Total cost is 19

## Part 3 - List Viewer

URL: http://localhost:3000/3-list-viewer/

Design a single page app with the following specs:

1. Shows 10 posts in the beginning
2. Clicking "Show more..." button shows 10 more posts
3. Clicking a post expands it and shows its replies below
4. Clicking an expanded post collapses it
5. App should be efficient with minimal network requests and rendering

Available APIs

1. Posts: https://jsonplaceholder.typicode.com/posts
2. Replies: https://jsonplaceholder.typicode.com/comments?postId=${id}

## Part 4 - Broken Todo

URL: http://localhost:3000/4-broken-todo/

Fix the todo app to work as expected:

1. Add a todo
2. Toggle a todo
3. Remove a todo

without any errors in the console.
