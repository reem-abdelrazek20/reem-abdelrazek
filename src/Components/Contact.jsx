import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactStyle.css"

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_he3d75c", //  Service ID
        "template_slahkwh", //  Template ID
        formRef.current,
        "owkq6S9XvntM4iELN" //  Public Key
      )
      .then(
        (result) => {
          console.log(" تم الإرسال:", result.text);

          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(" حصل خطأ:", error.text);
          alert(" حدث خطأ أثناء الإرسال");
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="section-header">Contact</h2>

      <div className="contact-wrapper">
        <form
          ref={formRef}
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email" // ← نفس اسم القالب
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message" // ← نفس اسم المتغير في قالب EmailJS
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
          >
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa-solid fa-location-dot"></i>
              <span className="contact-text place">Esna - Luxor, Egypt</span>
            </li>
            <li className="list-item">
              <i className="fa-solid fa-phone"></i>
              <span className="contact-text phone">+201141272473</span>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x" style={{color:"#E0DFFF"}}> </i>
              <span className="contact-text gmail">
                <a href="mailto:reemsadek2000@gmail.com">
                  reemsadek2000@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/reem-abdelrazek20"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa-brands fa-github"  style={{ color: "#9290C3" }}></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa-brands fa-codepen" style={{ color: "#535C91" }}></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          <hr />
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
}
