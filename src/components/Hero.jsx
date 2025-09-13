import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 ">
<motion.img
  src="/photo.jpg"
  alt="Al Afath A"
  className="w-48 h-48 rounded-full border-4 border-white shadow-xl mb-5 object-cover object-top"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>



      <motion.h1
  className="text-4xl font-extrabold text-center font-serif tracking-wide"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  AL AFATH
</motion.h1>


      <motion.h2
        className="text-lg text-gray-400 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Software Developer | Java Full Stack Developer | Web Developer
      </motion.h2>

      <motion.p
        className="mt-6 max-w-xl text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        I’m a passionate Web Developer currently working with Spring Boot, Java, HTML/CSS, JavaScript, and SQL.
        I enjoy building real-world projects and continuously exploring new opportunities to grow.
      </motion.p>

      {/* 🚀 Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://github.com/Alafath02"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alafath13/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="/Alafathcv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
