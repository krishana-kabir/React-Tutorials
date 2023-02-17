import React, { useState, useEffect } from "react";
import "./apiStyle.css";
const Assingment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  const deleteRow = (item) => {
    const tempData = data;

    const filteredPeople = tempData.filter((row) => item.id !== row.id);
    setData(filteredPeople);
  };

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr onClick={() => deleteRow(item, index)}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Assingment;
