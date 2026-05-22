import { useState } from "react";
import "../styles/skillStyle.css";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("hard");

  return (
    <div className="mt-10">
      <h2 className="section-header">My Skills</h2>

      <section className="skills-section">
        <div className="skills-toggle">
  <button
    className={activeTab === "hard" ? "active hard" : ""}
    onClick={() => setActiveTab("hard")}
  >
    Hard Skills
  </button>

  <button
    className={activeTab === "soft" ? "active soft" : ""}
    onClick={() => setActiveTab("soft")}
  >
    Soft Skills
  </button>
</div>

        <div className="skills-content ">
          {activeTab === "hard" ? (
            <div className="skills-grid">

              <div className="skill-card">
                <i className="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                <p>HTML</p>
                <input type="range" value="90" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-css3-alt" style={{ color: "#264de4" }}></i>
                <p>CSS</p>
                <input type="range" value="90" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-js" style={{ color: "#f0db4f" }}></i>
                <p>JavaScript</p>
                <input type="range" value="80" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
                <p>React</p>
                <input type="range" value="70" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-bootstrap" style={{ color: "#7952b3" }}></i>
                <p>Bootstrap</p>
                <input type="range" value="85" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-css3-alt" style={{ color: "#38bdf8" }}></i>
                <p>Tailwind CSS</p>
                <input type="range" value="80" max="100" disabled />
              </div>

              <div className="skill-card">
                <i className="fa-brands fa-figma" style={{ color: "#F24E1E" }}></i>
                <p>Figma</p>
                <input type="range" value="85" max="100" disabled />
              </div>

            </div>
          ) : (
             <div className="soft-skills-list ">
          <div className="soft-skill-card">Teamwork</div>
          <div className="soft-skill-card">Communication</div>
          <div className="soft-skill-card">Problem Solving</div>
          <div className="soft-skill-card">Adaptability</div>
          <div className="soft-skill-card">Creativity</div>
          <div className="soft-skill-card">Time Management</div>
        </div>
          )}
        </div>
      </section>
    </div>
  );
}