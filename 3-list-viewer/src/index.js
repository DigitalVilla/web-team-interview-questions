/*

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

*/
const getAll = 'https://jsonplaceholder.typicode.com/posts'
const getPostReplies = 'https://jsonplaceholder.typicode.com/comments?postId='

// get all my post

//state
let POSTS = []
let postN = 10
let count = 0

// methods
const getPosts = async () => {
  const p = await fetch(getAll)
  return p
}

import './index.css'

const postsDiv = document.getElementById('posts')
const showMoreButton = document.getElementById('show-more-button')

const createPost = (post) => {
  const div = document.createElement('div')
  const divReplies = document.createElement('div')
  div.id = post.id
  div.className = 'post'
  div.innerHTML = post.body
  div.appendChild(divReplies)
  return div
}

const createReply = (reply) => {
  const div = document.createElement('div')
  div.className = 'reply'
  div.innerHTML = reply.body
  return div
}

showMoreButton.onclick = () => {
  renderPosts()
}

// document . listeners click
//class .post
// e.target.id
// parent ?? e.target

//createReply
// fragment each reply
// fragment > parentchilde

const renderPosts = () => {
  const fragment = document.createDocumentFragment()

  for (let i = count; i < postN + count; i++) {
    // validate

    console.log(i)
    if (POSTS[i]) {
      fragment.appendChild(createPost(POSTS[i]))
    }
  }

  count += postN
  postsDiv.appendChild(fragment)
}

async function init() {
  const res = await getPosts()
  POSTS = await res.json()
  console.log(POSTS)
  //display
  renderPosts()
}

init()
