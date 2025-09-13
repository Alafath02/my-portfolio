import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="min-h-screen bg-[#0f172a] text-white px-6 py-20 flex flex-col items-center"
>
  <motion.h2
    className="text-4xl font-bold mb-10 text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    About Me
  </motion.h2>

  <motion.div
    className="max-w-3xl text-lg leading-relaxed text-justify space-y-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    <p>
      Hello! I'm <span className="font-semibold text-blue-500">Al Afath A</span>,
      a passionate Web Developer with 2 years of experience in building
      creative and functional web applications. I specialize in
      <span className="font-medium text-green-500"> Java</span>,
      <span className="font-medium text-yellow-500"> Spring Boot</span>, and
      <span className="font-medium text-purple-500"> SQL</span>,
      with strong knowledge of front-end technologies like
      <span className="font-medium text-green-500"> HTML</span>,
      <span className="font-medium text-yellow-500"> CSS</span>, and
      <span className="font-medium text-purple-500"> JavaScript</span>.
    </p>

    <p>
      I have worked on ERP modules such as Inventory, Sales, Accounting, and Reports,
      where I developed and maintained full-stack solutions, implemented multilingual support,
      and optimized database-driven applications. My experience also includes live project
      deployments and collaborating with teams to deliver scalable business solutions.
    </p>

    <p>
      I’m currently enhancing my skills by exploring React, Tailwind CSS,
      and modern UI libraries to strengthen my frontend expertise.
    </p>

    <p>
      I’m open to working on full-stack web development projects,
      where I can use my skills, learn more, and grow.
    </p>
  </motion.div>
</section>

  );
}
