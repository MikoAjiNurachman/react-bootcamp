import React from "react";

export default function Dashboard({
  setSingleUser,
  user,
  setUser,
  setPageAdmin,
}) {
  const changePage = (page) => {
    setPageAdmin({ page: page });
  };
  const changePageUpdate = (pages, data) => {
    setPageAdmin((prevPage) => {
      return ({ ...prevPage },{ page: pages })
    });
    const finder = user.find((value) => {
      return value.id === data;
    });
    setSingleUser((prevUser) => {
      return ({...prevUser},finder);
    });
  };
  const arr = user.filter((ele) => ele.role === 2);
  const funDelete = (data) => {
    setUser((prevData) => {
      const user = [...prevData];
      const index = user.findIndex((value) => value.id === data);
      user.splice(index, 1);
      return user;
    });
    alert("Data Deleted !");
  };
  return (
    <>
      <div>
        <button onClick={() => changePage("create")}>Create Merchant</button>
      </div>
      <div className="columns">
        {arr.map((element) => (
          <div key={element.id} className="card columns-4">
            <div className="card-head">
              <div className="card-body">
                <ul>
                  <li>Username: {element.username}</li>
                  <li>Password: {element.password}</li>
                  <li>
                    <div>
                      <button
                        onClick={() => changePageUpdate("edit", element.id)}
                      >
                        Edit
                      </button>
                      <button onClick={() => funDelete(element.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
