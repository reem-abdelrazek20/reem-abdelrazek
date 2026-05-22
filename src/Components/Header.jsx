import "../styles/headerStyle.css";
export default function Header() {
  return (
    <header className="header">
      <nav >
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
           <li>
            <a href="#Skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
