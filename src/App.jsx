import { useState } from "react";
import "./App.css";

function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addCount}>เพิ่มค่า</button>
      <button onClick={subtractCount}>ลดค่า</button>
      <button onClick={resetCount}>เคียร์ค่า</button>
    </>
  );
}

export default App;
