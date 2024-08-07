import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;

  // const [count, setCount] = useState(0);

  // const addCount = () => {
  //   setCount(count + 1);
  // };

  // const subtractCount = () => {
  //   setCount(count - 1);
  // };

  // const resetCount = () => {
  //   setCount(0);
  // };

  const [students, setStudent] = useState([
    { id: 1, name: "ง้อง" },
    { id: 2, name: "โจโจ้" },
    { id: 3, name: "โจ้จริง" },
    { id: 4, name: "ก้อง" },
  ]);

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={addCount}>เพิ่มค่า</button>
      <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      <button onClick={subtractCount}>ลดค่า</button>
      <button onClick={resetCount}>เคียร์ค่า</button> */}

      <h1>จำนวนนักเรียน : {students.length}</h1>
      <ul>
        {students.map((value, index) => (
          <li key={index}>
            {value.id} - {value.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
