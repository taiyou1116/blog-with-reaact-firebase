import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, doc, getDocs, orderBy } from 'firebase/firestore'
import { auth, db } from '../firebase'

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"), orderBy("timestamp", "desk"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  }

  return (
    <div className='homePage'>
      { postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='postTextContainer'>
              {post.postText}
            </div>
            <div className='nameDeleteButton'>
              <h4>@{post.author.username}</h4>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home