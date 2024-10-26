import { useState } from 'react';
import './App.css'

import PostForm from './components/PostForm';
import PostList from './components/PostList';

// const data = [
//   {
//     id: 0,
//     title:"Post 1",
//     description:"Post 1 description",
//     image:""
//   },
//   {
//     id: 1,
//     title:"Post 2",
//     description:"Post 2 description",
//     image:""
//   },
//   {
//     id: 2,
//     title:"Post 3",
//     description:"Post 3 description",
//     image:""
//   },
// ]

function App() {
  
  const [posts, setPosts] = useState([])

  return (
    <>
   <PostForm setPosts={setPosts}/>
   <PostList posts={posts} setPosts={setPosts}/>
    
     
    </>
  )
}

export default App
