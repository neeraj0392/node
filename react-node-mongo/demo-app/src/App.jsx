import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Student").then(async (response) => {
      const students = await response.json();
      setData(students);
    });
  }, []);

  return (
    <div className="container">
      <ul className="list-group">
        {data?.map((element, index) => (
          <li key={index} className="list-group-item">
            <div>
              Name:{element.name}
              <br />
              Age:{element.age}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
