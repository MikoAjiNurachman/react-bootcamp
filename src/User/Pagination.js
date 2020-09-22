import React, { useEffect, useRef, useState } from "react";
import uuid from "uuid/v4";

export default function Pagination({ setPagination }) {
  const limit = useRef()
  const countPages = useRef()
  const [maxData, setMaxData] = useState(0);
  const [components, setComponents] = useState([]);
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let jsonpars = JSON.parse(xhr.response);
        setMaxData(jsonpars.length);
      }
    };
    xhr.open("GET", `https://jsonplaceholder.typicode.com/photos`);
    xhr.send();
  }, []);

  const setPages = () => {
    let limitCount = limit.current.value  
    let pageCount = countPages.current.value
    console.log(pageCount)
    setPagination((prevData) => {
        return ({ ...prevData },{ limit: limitCount, page: pageCount });
    })
  }

  const paging = () => {
    let limits = limit.current.value;

    setPagination((prevData) => {
      return ({ ...prevData },{ limit: limits, page: "1" });
    })
    if (limit.current.value === "") return

    const count = Math.ceil(maxData / parseInt(limit.current.value));
    let arr = []
    for (let index = 1; index <= count; index++) {
      arr.push(
        <option key={uuid()} value={index}>
          {index}
        </option>
      );
      setComponents((prevCom) => {
        return ([...prevCom],arr);
      });
    }
  };
  return (
    <div>
      <input
        onChange={paging}
        type="number"
        ref={limit}
        name="limit"
        placeholder="Limits....."
      />
      <select ref={countPages} onChange={setPages}>
        <option>Start</option>
        {components}
      </select>
    </div>
  );
}
