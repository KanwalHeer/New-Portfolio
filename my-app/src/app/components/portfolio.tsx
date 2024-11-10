"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaTimes,
  FaBars,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import {} from "react-icons/fa";
import emailjs from "emailjs-com";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, level: 65 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
  { name: "Redux", icon: <SiRedux />, level: 65 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
];
const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with Next.js and TailwindCSS to showcase my skills, projects, and achievements.",
    tags: ["Next.js", "Node.js", "TypeScript", "TailwindCSS"],
    link: "https://kanwalheer.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "An online shopping platform built with Next.js and Node.js, providing users with a seamless shopping experience.",
    tags: ["Next.js", "Node.js", "TypeScript", "TailwindCSS"],
    link: "https://milestone-03-project.vercel.app/myproduct",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blog platform built with Next.js and Node.js, featuring a simple yet powerful interface for content creation and management.",
    tags: ["Next.js", "Node.js", "TypeScript", "TailwindCSS"],
    link: "https://milestone-03-blog-post-rq1e.vercel.app/",
  },
  {
    id: 4,
    title: "User Authentication and API Integration",
    description:
      "A project demonstrating user authentication and API integration with Next.js, Node.js, and MongoDB.",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB", "TailwindCSS"],
    link: "https://milestone-04-assignments.vercel.app/",
  },
  {
    id: 5,
    title: "Full-Stack To-Do App",
    description:
      "A full-stack To-Do application built with Next.js, Node.js, MongoDB, and TypeScript, allowing users to manage tasks efficiently.",
    tags: ["Next.js", "Node.js", "TypeScript", "TailwindCSS", "MongoDB"],
    link: "https://next-js-fullstack-todo-app-sigma.vercel.app/",
  },
  {
    id: 6,
    title: "Resume Builder",
    description:
      "A simple Resume Builder tool created with HTML, CSS, and TypeScript, enabling users to generate professional resumes easily.",
    tags: ["HTML", "CSS", "TypeScript"],
    link: "https://hackathon-lilac-nu.vercel.app/",
  },
];

const downloadLetter = (type: "internship" | "job") => {
  const letterUrl =
    type === "internship"
      ? "/kanwal-heer-full-stack-developer.pdf"
      : "/path/to/job-letter.pdf";

  const link = document.createElement("a");
  link.href = letterUrl;
  link.download =
    type === "internship" ? "internship-letter.pdf" : "job-letter.pdf";
  link.click();
};

const downloadResume = () => {
  const resumeUrl = "/kanwalheer.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Kanwal_Heer.pdf";
  link.click();
};
const SinglePagePortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const Header = () => (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="logo">KH</div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Links */}
        <ul className={`links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "projects", "contact"].map((item) => (
            <li
              key={item}
              className={`${activeSection === item ? "active" : ""}`}
              onClick={() => {
                scrollToSection(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  const Hero = () => (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <motion.h1
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-title"
      >
        Hi, I&apos;m <span className="text-indigo-600">Kanwal Heer</span>
      </motion.h1>
      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="secondary"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </motion.button>
      </motion.div>

      <motion.div
        className="social-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="social-heading">Hire Me</h3>
        <div className="social-links">
          {[
            {
              name: "https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              icon: <FaLinkedin size={24} />,
            },
            {
              name: "https://github.com/KanwalHeer",
              icon: <FaGithub size={24} />,
            },

            {
              name: "mailto:alikanwal382@gmail.com",
              icon: <FaEnvelope size={24} />,
            },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.name}
              whileHover={{ scale: 1.1 }}
              className="social-link"
            >
              <span className="social-icon">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div
        className="download-resume-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="download-resume"
          onClick={downloadResume}
        >
          Download Resume
        </motion.button>
      </motion.div>
    </motion.section>
  );

  const About = () => (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="about"
    >
      <motion.h2
        className="about-title"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="content">
        <div className="profile-info">
          {/* Profile Image */}
          <div className="profile-image">
            <Image
              src="/kanwalheer.png"
              alt="Kanwal Heer"
              width={150}
              height={150}
            />
          </div>
          <p>
            <strong>Email:</strong> alikanwal382@gmail.com
          </p>
          {/* Name */}
          <h3>Kanwal Heer</h3>

          {/* Information Section (2 columns) */}
          <div className="info-grid">
            <p>
              <strong>Location:</strong> Ghulshan-e-maymar Karachi Pakistan
            </p>
            <p>
              <strong>Education:</strong> Bachelor&apos;s in Arts
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/kanwal-heer-b3b7b62b6https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/KanwalHeer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>

        {/* Experience Section: Right Grid Column */}
        <div className="experience">
          <div className="experience-item">
            <h3>3-Month Internship in Web Development</h3>
            <p>
              During my internship, I worked with a team of developers,
              contributing to web application projects, improving my HTML, CSS,
              JavaScript, and React skills.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-button"
              onClick={() => downloadLetter("internship")}
            >
              Download Internship Letter
            </motion.button>
          </div>

          <div className="experience-item">
            <h3>Frontend Developer at Precise Tech</h3>
            <p>
              I am currently working as a Frontend Developer at Precise Tech,
              where I handle the development of interactive user interfaces
              using React, Next.js, and Tailwind CSS.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-button"
              onClick={() => downloadLetter("job")}
            >
              Download Job Letter
            </motion.button>
          </div>
        </div>
      </div>

      {/* Skills Section (Full Width Below Profile and Experience) */}
      <div className="skills">
        <h3 className="text-xl font-bold">Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className={`progress progress-${skill.level}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  const Projects = () => (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="projects"
    >
      <motion.h2
        className="projects-title"
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
      >
        My Projects
      </motion.h2>
      <div className="grid">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            whileHover={{ y: -10 }}
            className="project"
          >
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-link"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      user_id:""
    });
    const [status, setStatus] = useState("");

    // Handle form input changes
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("Sending...");

      emailjs
        .send(
          "service_rusgf3f", // Your EmailJS service ID
          "template_ppgjv8m", // Your EmailJS template ID
          formData,
          "NqUYJsuWwIMmFHzk3" // Your EmailJS User ID
        )
        .then(
          (response) => {
            setStatus("Message sent successfully!");
            console.log("Success:", response);
            setFormData({ name: "", email: "", message: "",user_id:"" });
          },
          (error) => {
            setStatus("Failed to send message, please try again.");
            console.log("Failed:", error);
          }
        );
    };

    return (
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact"
      >
        <motion.h2
          className="contact-title"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          className="form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="input"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              className="textarea"
              required
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        {status && <motion.p className="status">{status}</motion.p>}
      </motion.section>
    );
  };

  const Footer = () => (
    <footer className="footer">
      <div className="social">
        {[
          {
            name: "GitHub",
            icon: <FaGithub size={24} />,
            url: "https://github.com/KanwalHeer",
          },
          {
            name: "LinkedIn",
            icon: <FaLinkedin size={24} />,
            url: "https://www.linkedin.com/in/kanwal-heer-b3b7b62b6https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ].map((social) => (
          <motion.a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="social-link"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      <motion.p
        className="copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        © 2024 Kanwal Heer. All rights reserved.
      </motion.p>
    </footer>
  );

  return (
    <div className="portfolio-container">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default SinglePagePortfolio;
