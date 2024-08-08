import { useState } from "react";
import "./StudenList.css";

export default function StudenList() {
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
  ]);
  const [show, setShow] = useState(true);

  const deleteStudent = (id) => {
    setStudent(students.filter((value) => value.id !== id));
  };

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={addCount}>เพิ่มค่า</button>
      <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      <button onClick={subtractCount}>ลดค่า</button>
      <button onClick={resetCount}>เคียร์ค่า</button> */}
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน ({students.length})</h1>
          <button onClick={() => setShow(!show)}>สลับ</button>
        </div>
        {show &&
          students.map((value, index) => (
            <li key={index}>
              <p>
                {value.id} - {value.name}
              </p>
              <button
                className="delete"
                onClick={() => deleteStudent(value.id)}
              >
                ลบ
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
