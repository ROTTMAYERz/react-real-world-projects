import "./Item.css";

export default function Item({ data, deleteStudent }) {
  return (
    <>
      <li className={data.gender}>
        <p>
          {data.id} - {data.name}
        </p>
        <button className="delete" onClick={() => deleteStudent(data.id)}>
          ลบ
        </button>
      </li>
    </>
  );
}
