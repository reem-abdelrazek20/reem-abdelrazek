import "../styles/homeStyle.css"
import myImg from "../assets/my.jpeg";

export default function Home() {
  return (
    <div className="home-container">
        <img src={myImg} alt="Reem" />
      <h1>Reem Abdelrazek</h1>
      <p className="animated-role">
        I am a <span className="words mt-5" ></span>
      </p>

      {/* أيقونات التواصل */}
      <div className="contact-icons mt-5">
        <a
          href="https://github.com/reem-abdelrazek20"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/reem-abdelrazek20"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

    <a href="/Reem Abdelrazek-cv.pdf" download className="btn mt-5">
  <i className="fa-solid fa-download"></i> Download CV
</a>
    </div>
  );
}
