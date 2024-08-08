import logo from "/images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <a href="/">หน้าแรก</a>
    </nav>
  );
}
