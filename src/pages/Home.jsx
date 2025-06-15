import React, { useEffect, useState } from 'react';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaWhatsapp, 
  FaTelegram, 
  FaFacebook, 
} from 'react-icons/fa';
import './Home.css';
import profileImg from '../assets/profile1.jpg';
import profileImg2 from '../assets/profile2.jpg';
import cvFile from '../assets/cv.pdf';
import project1 from '../assets/p2.png';
import project2 from '../assets/p1.png';
import project3 from '../assets/p3.png';
import project4 from '../assets/p6.png';
import project5 from '../assets/p5.png';
import project6 from '../assets/p4.png';
import video1 from '../assets/project n1.mp4';
import video2 from '../assets/project n2.mp4';
import video3 from '../assets/project n3.mp4';
import video4 from '../assets/project n4.mp4';
import video5 from '../assets/project n5.mp4';
import video6 from '../assets/project n6.mp4';

const colors = ['#ff4d6d', '#1dd3b0', '#fcbf49', '#5a189a', '#00b4d8'];

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React (JSX)', percentage: 75 },
];

const projectDetails = [
  { title: "Booking Website", description: "Hotel booking site with search and payment." },
  { title: "CarShow Website", description: "Modern car showcase with details and images." },
  { title: "Pet Store Website", description: "Online store for pet products and adoption." },
  { title: "Int.Company Website", description: "Corporate site with services and team info." },
  { title: "Arc Design Website", description: "Architecture portfolio with project previews." },
  { title: "Netflix Clone Website", description: "Netflix-style UI for video browsing." },
];

const projectImages = [ project1, project2, project3, project4, project5, project6 ];
const projectVideos = [ video1, video2, video3, video4, video5, video6 ];

const Home = ({ darkMode }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <div id="home" className="main-content">
        <div className="left-side">
          <h2 className="name" style={{ color: colors[colorIndex] }}>Hamzah Mercy</h2>
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="right-side">
          <h1>Hello, I'm <strong className="name">Hamzah</strong></h1>
          <h2>Frontend Developer</h2>
          <p>I build responsive, performant web interfaces using modern front-end technologies like React, JavaScript, HTML, and CSS.</p>
          <div className="social-icons">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mercyhamzeh@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/hamzah_mercy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/0937364750" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://facebook.com/profile.php?id=100009650888590" target="_blank"><FaFacebook /></a>
          </div>
          <a href={cvFile} download className="download-btn">Download CV</a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-container">
        <div className="about-header">
          <h1 className="about-title" style={{ color: colors[colorIndex] }}>About Me</h1>
        </div>
        <div className="about-content">
          <div className="left-side">
            <img src={profileImg2} alt="Profile" className="profil-img" />
          </div>
          <div className="right-side">
            <p>
              I'm a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and ReactJS.
              I enjoy turning complex ideas into elegant, functional websites and applications. I strive for continuous
              growth and take pride in clean, user-friendly code.
            </p>
            <div id="skills" className="skills">
              <h2 className="title2">Professional Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="box">
                  <h4>{skill.name}</h4>
                  <div className="percent-bar-wrapper">
                    <div className="percent">
                      <div className="percent-fill" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                    <span className="percent-label">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat">
            <h3 className="stat-number">4+</h3>
            <p className="stat-label">Years of Experience</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">9+</h3>
            <p className="stat-label">Web Projects Completed</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="project-section">
        <h2 className="name">My Latest Projects</h2>
        <div className="project-grid">
          {projectImages.map((image, index) => (
            <div className="project-card" key={index}>
              <img
                src={image}
                alt={projectDetails[index]?.title || `Project ${index + 1}`}
                className="project-image"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="project-info">
                <h3 className="project-title">{projectDetails[index]?.title}</h3>
                <p className="project-description">{projectDetails[index]?.description}</p>
                <a href={projectVideos[index]} download={`project${index + 1}.mp4`} className="project-link">
                  Download Demo Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>Interested in working together or have a question? Feel free to reach out!</p>

          {/* FormSubmit form */}
          <form
            action="https://formsubmit.co/mercyhamzeh@gmail.com"
            method="POST"
            className="contact-form"
          >
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Optional: Redirect after submit */}
            {/* <input type="hidden" name="_next" value="https://your-site.com/thank-you" /> */}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="6" required />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>+963 0937364750 / +962 07 9275 6253</p>
          </div>
          <div className="contact-info">
            <h4>Email</h4>
            <p>mercyhamzeh@gmail.com</p>
          </div>
          <div className="social-media">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://facebook.com/profile.php?id=100009650888590" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com/hamzah_mercy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/0937364750" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://t.me/@H477774" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
        <div className="footer-content">
          <p className="footer-text">© {new Date().getFullYear()} Hamzah Mercy. All rights reserved.</p>
          <div className="footer-icons">
            <a href="mailto:mercyhamzeh@gmail.com"><FaEnvelope /></a>
            <a href="https://instagram.com/hamzah_mercy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/0937364750" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://facebook.com/profile.php?id=100009650888590" target="_blank"><FaFacebook /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
