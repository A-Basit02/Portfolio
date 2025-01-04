import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';
import calculator from "./assests/calculator.PNG";
import StopWatch from "./assests/StopWatch.PNG";

const Portfolio = () => {
  const projects = [
    {
      title: "Calculator",
      description: "A fully functional calculator built with HTML, CSS, and JavaScript. Features arithmetic operations and a clean user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/A-Basit02/Calculator",
      live: "https://a-basit02.github.io/Calculator/",
      image: calculator,
    },
    {
      title: "Stopwatch",
      description: "An interactive stopwatch application with start, stop, and reset functionality. Built using vanilla JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/A-Basit02/StopWatch",
      live: "https://a-basit02.github.io/StopWatch/",
      image: StopWatch,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-stone-900 to-yellow-900 font-poppins">
      
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-75 bg-black text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-quebecks">Abdul Basit</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#skills" className="hover:text-yellow-400">Skills</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex justify-center items-center bg-cover bg-center relative" >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
        <div className="text-center relative z-10 px-4 py-16">
          <h1 className="text-8xl font-quebecks mb-4 text-white">Abdul Basit</h1>
          <p className="text-2xl text-gray-200 mb-6">Frontend Developer</p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/A-Basit02" className="flex items-center gap-2 text-gray-400  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/a-basit-72934522b/" className="flex items-center gap-2 text-gray-400  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:basit16003@gmail.com" className="flex items-center gap-2 text-gray-400  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-6xl font-quebecks mb-8 text-white">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm a passionate frontend developer in my final semester of university. 
          I specialize in building responsive web applications using modern technologies 
          like React.js, HTML5, CSS3, and JavaScript.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-6xl font-quebecks mb-8 text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'].map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-6xl font-quebecks mb-8 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <div className="bg-white rounded-lg overflow-hidden flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[400px] h-[200px] object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-black"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-black"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-6xl font-quebecks mb-8 text-white">Contact</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-light-gray mb-4">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
          <a 
            href="mailto:basit16003@gmail.com"
            className="inline-block transition ease-in-out delay-150 bg-black text-white px-6 py-3 rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-gray-800"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
