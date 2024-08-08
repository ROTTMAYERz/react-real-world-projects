import { useState } from "react";
import "./StudenList.css";
import Item from "../Item";

export default function StudenList({ students, deleteStudent }) {
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

  const [show, setShow] = useState(true);

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
          <button
            style={{ background: show ? "purple" : "green" }}
            onClick={() => setShow(!show)}
          >
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          students.map((value, index) => (
            <Item key={index} data={value} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
}
