import React from 'react'
import { auth, provider } from "../firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom' 

function Login({ setIsAuth }) {
  
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log(result._tokenResponse.displayName);
      navigate("/");
    })
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login