import React from 'react'

export default function Login({user, setIsLogin}) {
    
    const triggerPush = (e) => {
        e.preventDefault()
        var username = e.target.username.value
        var password = e.target.password.value
        let bool = false
        user.forEach(ele => {
            if (username === ele.username && password === ele.password) {
                setIsLogin((prevData) => {
                    return ({...prevData},{role: ele.role, status: true})
                })
                bool = true
            } 
        })
        if (bool === false) {
            alert('Login Gagal !')
            e.target.username.value = ""
            e.target.password.value = ""
        }
    }


    return (
        <div className="form">
            <form className="form-login" onSubmit={triggerPush}>
                <h3>Login</h3>
                <div className="group-login">
                    <input required name="username" autoComplete="off" className="input-login" type="text"/>
                    <label className="label-login">Username</label>
                </div>
                <div className="group-login">
                    <input required name="password" autoComplete="off" className="input-login" type="password"/>
                    <label className="label-login">Password</label>
                </div>
                <button type="submit" className="button-login">Login</button>
            </form>
        </div>
    )
}
