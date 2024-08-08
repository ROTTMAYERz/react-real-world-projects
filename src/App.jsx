import { useState } from "react";
import { Header, StudenList } from "./components/index";
import "./App.css";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "ง้อง" },
    { id: 2, name: "โจโจ้" },
    { id: 3, name: "โจ้จริง" },
  ]);

  const deleteStudent = (id) => {
    setStudent(students.filter((value) => value.id !== id));
  };

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <StudenList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
