import React ,{useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Index({pagination,setPagination}) {
  const [loading, setLoading] = useState({
    isLoading: false
  })
  const [stuff, setStuff] = useState([])
  useEffect(()  => {
    const duration = setTimeout(() => {
      setLoading({isLoading: true})
    })
    const fetchApi = async () => {
      const url = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${pagination.limit}&_start=${pagination.page}`)
      const data = await url.json()
      setStuff((prevStuff) => {
        return ([...prevStuff], data)
      })
      clearTimeout(duration)
      setLoading({isLoading: false})
    }
    fetchApi()
  }, [pagination])
  return (
    <div>
      <Pagination setPagination={setPagination}/>
      <div className="columns">
        {loading.isLoading ? <div>Loading......</div> :
                    stuff.map((element) => (
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
        )
      </div>
    </div>
  );
}
