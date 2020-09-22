import React from 'react'
import uuid from 'uuid/v4'

export default function Create({setPageAdmin,setUser}) {
    let triggerPush = (e) =>{
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        setUser((prevUser) => {
            return ([...prevUser, { id: uuid(), username: username, password: password, role: 2 }])
        })
        alert('User Added !')
        e.target.username.value = null
        e.target.password.value = null
    }
    let backDashboard = (e) => {
        setPageAdmin({
            page: "index"
        })
    }
    return (
        <>
        <button onClick={backDashboard}>Back Dashboard</button>
        <div className="form">
            <form className="form-login" onSubmit={triggerPush}>
                <h3>Create Merchant</h3>
                <div className="group-login">
                    <input required name="username" autoComplete="off" className="input-login" type="text"/>
                    <label className="label-login">Username</label>
                </div>
                <div className="group-login">
                    <input required name="password" autoComplete="off" className="input-login" type="password"/>
                    <label className="label-login">Password</label>
                </div>
                <button type="submit" className="button-login">Create</button>
            </form>
        </div>
        </>
    )
}
