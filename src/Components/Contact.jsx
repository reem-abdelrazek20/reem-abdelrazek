import "../styles/contactStyle.css";

export default function Contact() {
  return (
    <section id="contact ">
      <h2 className="section-header">Contact</h2>
      <p className="section-subheader">
        Let's connect! I'm always open to discussing new opportunities and
        exciting projects.
      </p>
      <div className="cards-contact">
        <div className="card-contact">
          <h2 className="card-h2 ">Let's Work Together</h2>
          <p>
            I'm a Front-End Developer passionate about building responsive,
            user-friendly, and modern web applications.
          </p>
          <div className="buttons ">
            <button>Send Email</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="card-contact">
          <h2 className="card-h2">Contact Information</h2>
          <ul>
            <li>
              <strong>
                <i className="fa-solid fa-location-dot"></i> Location:
              </strong>
              Esna - Luxor, Egypt
            </li>
            <li>
              <strong>
                {" "}
                <i className="fa-solid fa-phone"></i>Phone:
              </strong>{" "}
              <a href="tel:+201141272473">+20 11 4127 2473</a>
            </li>
            <li>
              <strong>
                <i className="fa-solid fa-envelope"></i> Email:
              </strong>{" "}
              <a href="mailto:reemsadek2000@gmail.com">
                reemsadek2000@gmail.com
              </a>
            </li>
          </ul>
          <div className="social-icons mt-8">
            <h2>Find me on</h2>

            <a
              href="https://www.linkedin.com/in/رابط-حسابك"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/reem-abdelrazek20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
    </section>
  );
}
