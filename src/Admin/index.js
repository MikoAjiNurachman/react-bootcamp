import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Create from './Create'
import Edit from './Edit'

function Index({setUser, user}) {
    const [pageAdmin,setPageAdmin] = useState({
        page: "index"
    })
    const [singleUser, setSingleUser] = useState() 
    return (
        <div>
            <div>
                {pageAdmin.page === "index" ? <Dashboard setSingleUser={setSingleUser} user={user} setUser={setUser} setPageAdmin={setPageAdmin}/> : pageAdmin.page === "create" ? <Create setSingleUser={setSingleUser} setPageAdmin={setPageAdmin} setUser={setUser} /> : pageAdmin.page === "edit" ? <Edit setPageAdmin={setPageAdmin} setUser={setUser} singleUser={singleUser}/> : ""}
                
            </div>
        </div>
    )
}

export default Index
