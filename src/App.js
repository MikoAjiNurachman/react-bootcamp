import React, { useState, useEffect } from 'react';
import './assets/style.css'
import Login from './Login'
import uuid from 'uuid/v4'
import IndexAdmin from './Admin/'
import IndexPedagang from './Pedagang/'
import IndexUser from './User/'
import Logout from './Logout';


function App() {
  const [isLogin, setIsLogin] = useState({
    role: 0,
    status: false
  })
  const [pagination, setPagination] = useState({
    page: 1,  
    limit: 5
  })
  const [stuff, setStuff] = useState([])
  const [user, setUser] = useState([
    {
      id: uuid(),
      username: "admin",
      password: "admin",
      role: 1
    },
    {
      id: uuid(),
      username: "pedagang",
      password: "pedagang",
      role: 2
    },
    {
      id: uuid(),
      username: "user",
      password: "user",
      role: 3
    }
  ]) 
  useEffect(() => {
    
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
          let jsonpars = JSON.parse(xhr.response)
          setStuff((prevStuff) => {
            return ([...prevStuff], jsonpars)
          })
      }
    }
    xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${pagination.limit}&_start=${pagination.page}`)
    xhr.send()
  }, [pagination,isLogin,user])
  console.log(pagination)
  let page = ""
      if (isLogin.role === 1) {
          page = <IndexAdmin setUser={setUser} user={user}/>
      } else if (isLogin.role === 2) {
          page = <IndexPedagang/>
      } else if (isLogin.role === 3) {
          page = <IndexUser setPagination={setPagination} stuff={stuff}/>
      }
  return (
    <div className="container">
        {isLogin.status === true ? <><Logout setIsLogin={setIsLogin}/>{page}</> : <Login user={user} setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
