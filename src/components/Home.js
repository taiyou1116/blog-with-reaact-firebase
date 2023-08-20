import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

function Home() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [])

  return (
    <div className='homePage'>
      { postList.map((post) => {
        return (
          <div className='postContents'>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='postTextContainer'>
              {post.postText}
            </div>
            <div className='nameDeleteButton'>
              <h4>@{post.auther.username}</h4>
              <button>削除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home