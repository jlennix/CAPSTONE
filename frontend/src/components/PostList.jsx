import { useState, useEffect } from 'react';
import Post from './Post'

function PostList(props) {

    const {posts, setPosts} = props

      //when this component mounts i want to load data
  //use a react hook useEffect to make a fetch call

    useEffect(()=>{
        fetch('http://localhost:8080/api/posts')
          .then((res)=> res.json())
          .then((json) => {
            console.log('App.jsx useEffect:', json.data)
            setPosts(json.data)
          })
      }, [])

    return(
<>
{posts.map((post)=>(
      <Post title={post.title} description={post.description} image={post.image}/>
    ))}
</>
    )
}

export default PostList;