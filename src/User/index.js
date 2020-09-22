import React from "react";
import Logout from "../Logout";
import Pagination from "./Pagination";

export default function index({setPagination, stuff}) {
  
  return (
    <div>
      <Pagination setPagination={setPagination}/>
      <div className="columns">
        {stuff.map((element) => (
          <div key={element.id} className="card columns-4">
            <div className="card-head">
              <div className="card-body">
                <img
                  src={element.thumbnailUrl}
                  width="150"
                  height="150"
                  className="image-admin"
                  alt="default.jpg"
                />
                <ul>
                  <li>Name  : <br></br><strong>{element.title}</strong></li>
                  <li>url   : <br></br><strong>{element.url}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
