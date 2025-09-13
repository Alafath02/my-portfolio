import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-gray-900 py-20 px-4 text-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-12 rounded-2xl shadow-xl space-y-6 text-lg min-h-[350px] flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <span className="font-semibold">📧 Email:</span>{" "}
            <a
              href="mailto:alafth.jun02@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              alafth.jun02@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">📱 Phone:</span> +91 7826990748
          </p>

          <p>
            <span className="font-semibold">🔗 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/alafath13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              linkedin.com/in/alafath13/
            </a>
          </p>

          <p>
            <span className="font-semibold">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/Alafath02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              github.com/Alafath02
            </a>
          </p>

          <p>
            <span className="font-semibold">📍 Location:</span> Chennai, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
