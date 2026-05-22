import "../styles/aboutStyle.css"
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Hi, I'm Reem Abdelrazek, a Front-End Developer and UI/UX Designer</h2>
        <p>
          I enjoy designing and developing modern websites that combine attractive visuals with a smooth and user-friendly experience.

I work with HTML, CSS, JavaScript, React, and Tailwind CSS to create responsive and fast websites. I also use Figma for UI/UX design and Canva to create creative visual content and designs.

I always focus on delivering a comfortable user experience with clean and professional designs. I’m continuously improving my skills and learning new technologies to turn ideas into real and unique projects.
         </p>

        <div className="about-info" >
          <div>
            <h3>Experience</h3>
            <p>+1 Year</p>
          </div>
          <div>
            <h3>Frontend Skills</h3>
            <p>HTML • CSS • React</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Available Online</p>
          </div>
        </div>

        <a className="btn" href="mailto:reemsadek2000@gmail.com">
          Contact Me
        </a>
      </div>
    </section>
  );
}
