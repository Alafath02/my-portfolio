import React from "react";
import LoginUIUX from "../assets/loginuiux.png";
import portfolioScreenshot from "../assets/deployimage.png";
import SwaggerUI from "../assets/swaggersrc.png";
import Springtool from "../assets/springtool.png";

const Projects = () => {
 const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website built with React, showcasing my projects and skills.",
    image: portfolioScreenshot,
    demoLink: "https://alafath.vercel.app", // ✅ Fixed
    codeLink: "https://github.com/Alafath02/my-portfolio",
  },
  {
    id: 2,
    title: "Login and Register UI Website",
    description:
      "A modern UI/UX login and registration system with responsive design and validation.",
    image: LoginUIUX,
    demoLink: "https://alafath-login-ui-ux.vercel.app", // 🔁 Replace with actual demo
    codeLink: "https://github.com/Alafath02/login-UI-UX", // 🔁 Replace with your repo
  },
  {
    id: 3,
    title: "ERP on Billing System",
    description:
      "A JSP and Spring-based ERP system for managing billing, invoicing, and inventory operations. Features include product and customer management, invoice generation, sales reports, discount handling, and secure user authentication.",
    image: Springtool,
  },
  {
    id: 4,
    title: "REST API with Swagger (Spring Boot)",
    description:
      "A Spring Boot-based REST API with Swagger UI documentation. Supports CRUD operations, JWT authentication, validation, and follows RESTful standards for scalable integration with web or mobile clients.",
    image: SwaggerUI,
  },
];


  return (
    <section id="projects" className="w-full py-16 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] rounded-xl shadow-lg p-6 hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
