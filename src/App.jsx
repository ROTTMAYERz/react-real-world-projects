import { useState } from "react";
import { Header, StudenList, AddForm } from "./components/index";
import "./App.css";

function App() {
  const [students, setStudent] = useState([]);

  const deleteStudent = (id) => {
    setStudent(students.filter((value) => value.id !== id));
  };

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudenList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
