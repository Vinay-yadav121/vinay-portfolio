import { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Vinay Yadav</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <h1>Hi, I'm Vinay Yadav</h1>

        <h2>B.Tech CSE Student | Aspiring Software Developer</h2>

        <p>
          I am interested in Web Development, AI/ML, GenAI and Data Structures
          & Algorithms.
        </p>

       <div className="hero-buttons">
     <a href="#projects">View My Projects</a>

      <a href="https://github.com/" target="_blank">
          GitHub
     </a>
      </div> 
      </section>

{/* About Section */}
  <section id="about">
  <h2>About Me</h2>

  <p>
    I am a B.Tech Computer Science student interested in building
    practical software solutions. I am currently developing my skills
    in web development, AI/ML, GenAI and Data Structures & Algorithms.
  </p>

  <p>
    I enjoy learning by building projects and solving programming
    problems. My goal is to become a strong software developer and
    create useful technology-driven applications.
  </p>
  </section>

  {/* Skills Section */}
<section id="skills">
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <h3>Programming</h3>
      <p>C++</p>
      <p>Data Structures & Algorithms</p>
    </div>

    <div className="skill-card">
      <h3>Web Development</h3>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>Node.js</p>
    </div>

    <div className="skill-card">
      <h3>AI & GenAI</h3>
      <p>AI/ML Fundamentals</p>
      <p>Generative AI</p>
      <p>Prompt Engineering</p>
    </div>

    <div className="skill-card">
      <h3>Tools</h3>
      <p>Git</p>
      <p>GitHub</p>
      <p>VS Code</p>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>Adaptiq AI</h3>

      <p>
        An AI-powered web application that I am building to combine
        web development, AI/ML and Generative AI into a practical
        student-focused application.
      </p>

      <p className="project-tech">
        React • Node.js • Express • MongoDB • AI/ML • GenAI
      </p>

      <div className="project-buttons">
        <a href="#" target="_blank">
          GitHub
        </a>

        <a href="#" target="_blank">
          Live Demo
        </a>
      </div>
    </div>

  </div>
</section>

{/* Experience Section */}
<section id="experience">
  <h2>Experience</h2>

  <div className="experience-card">
    <h3>Frontend AI Engineering Intern</h3>

    <h4>FlyRank AI • In Progress</h4>

    <p>
      Currently completing a Frontend AI Engineering internship focused on
      building practical projects with modern frontend development and
      AI-assisted development workflows.
    </p>

    <ul>
      <li>Working with modern frontend development tools</li>
      <li>Learning AI-assisted software development workflows</li>
      <li>Building and documenting projects through GitHub</li>
      <li>Developing a professional portfolio and capstone project</li>
    </ul>
  </div>
</section>
{/* Certifications Section */}
<section id="certifications">
  <h2>Certifications</h2>

  <div className="certifications-container">

    <div className="certificate-card">
      <h3>Google AI Essentials</h3>
      <p>Google / Coursera</p>
      <span>Completed</span>
    </div>

    <div className="certificate-card">
      <h3>Generative AI</h3>
      <p>AI & Generative AI Learning</p>
      <span>Learning</span>
    </div>

    <div className="certificate-card">
      <h3>TCS iON Certification</h3>
      <p>TCS iON</p>
      <span>Certification</span>
    </div>

  </div>
</section>

{/* DSA Section */}
<section id="dsa">
  <h2>DSA & Problem Solving</h2>

  <div className="dsa-card">
    <h3>Data Structures & Algorithms in C++</h3>

    <p>
      I regularly practice Data Structures and Algorithms and solve
      programming problems to improve my problem-solving skills.
    </p>

    <div className="dsa-topics">
      <span>Arrays</span>
      <span>Hashing</span>
      <span>Binary Search</span>
      <span>Sliding Window</span>
      <span>Trees</span>
      <span>Graphs</span>
      <span>Linked Lists</span>
      <span>Greedy</span>
    </div>

    <a
      href="https://leetcode.com/"
      target="_blank"
      rel="noreferrer"
      className="leetcode-button"
    >
      View My LeetCode
    </a>
  </div>
</section>

{/* Contact Section */}
<section id="contact">
  <h2>Contact Me</h2>

  <p>
    I'm open to internship opportunities, software development roles,
    and interesting projects.
  </p>

  <div className="contact-links">
    <a href="mailto:your-email@example.com">
      Email Me
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </div>
</section>

    </div>
  );
}

export default App;
{/* Footer */}
<footer>
  <p>© 2026 Vinay Yadav. All rights reserved.</p>
</footer>