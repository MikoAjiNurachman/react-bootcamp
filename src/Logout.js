import React from 'react'

export default function Logout({setIsLogin}) {
    const setLogout = () => {
        setIsLogin((prevData) => {
            return ({...prevData}, { role: 0, status: false })
        })
    }
    return (
        <div>
            <button className="btn-logout" type="button" onClick={setLogout}>Logout</button>
        </div>
    )
}
