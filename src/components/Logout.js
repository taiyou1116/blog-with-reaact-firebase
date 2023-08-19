import React from 'react'
import { auth } from "../firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom' 

function Logout({ setIsAuth }) {
  
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout