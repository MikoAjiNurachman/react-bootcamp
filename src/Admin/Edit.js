import React, { useEffect, useRef } from 'react'

export default function Edit({setPageAdmin, setUser, singleUser}) {
    const username = useRef({})
    const password = useRef({})
    useEffect(() => {
        if (singleUser.id) {
            username.current.value = singleUser.username 
            password.current.value = singleUser.password
        }
    }, [singleUser])
    let backDashboard = (e) => {
        setPageAdmin({
            page: "index"
        })
    }
    let triggerPush = (e) => {
        e.preventDefault()
        let newData = { id: singleUser.id, username: username.current.value, password: password.current.value, role: 2 }
        setUser((prevUser) => {
            const array_copyan = [...prevUser]
            const index = array_copyan.findIndex(value => value.id === singleUser.id)
            array_copyan[index] = {...array_copyan[index],...newData}
            return array_copyan
        })
        alert('Data Edited !')
        username.current.value = ""
        password.current.value = ""
    }
    return (
        <>
        <button onClick={backDashboard}>Back Dashboard</button>
        <div className="form">
            <form className="form-login" onSubmit={triggerPush}>
                <h3>Edit Merchant</h3>
                <div className="group-login">
                    <input required ref={username} autoComplete="off" className="input-login" type="text"/>
                    <label className="label-login">Username</label>
                </div>
                <div className="group-login">
                    <input required ref={password} autoComplete="off" className="input-login" type="password"/>
                    <label className="label-login">Password</label>
                </div>
                <button type="submit" className="button-login">Update</button>
            </form>
        </div>
        </>
    )
}
