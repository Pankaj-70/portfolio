import React from "react";
import profilePic from "./assets/profile.png"; 
import './App.css'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 antialiased font-sans p-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-4xl w-full text-center bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={profilePic}
            alt="Pankaj Sharma"
            className="w-36 h-36 rounded-full shadow-lg border-4 border-white object-cover"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700">Pankaj Sharma</h1>
        <p className="mt-2 text-gray-600 text-lg">Computer Science Undergraduate • Full-Stack Developer • Competitive Programmer</p>

        {/* Intro */}
        <section className="mt-6">
          <p className="text-gray-700 text-base leading-relaxed">
            Final-year Computer Science student with a strong academic record (CGPA 9.37/10) and hands-on experience in
            full-stack web development, compiler design, and machine learning. Passionate about creating robust systems
            and contributing to impactful technology solutions.
          </p>
        </section>

        {/* Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:pankajsharma397050@gmail.com"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow text-sm font-medium transition"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Pankaj-70"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-gray-300 hover:border-indigo-600 rounded-lg text-sm transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-sharma-10794022a/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-gray-300 hover:border-indigo-600 rounded-lg text-sm transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Sections */}
        <div className="mt-12 text-left space-y-12">
          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-2">
              Highlights
            </h2>
            <ul className="space-y-2 text-gray-800 text-sm list-disc list-inside">
              <li>🎓 Pursuing B.Tech. CSE, Graphic Era Hill University (CGPA 9.37)</li>
              <li>💻 Solved 1100+ problems on LeetCode</li>
              <li>🏆 Ranked 917 in LeetCode Biweekly Contest 156 among 27,000+ participants</li>
              <li>🏅 Ranked 251 out of 15,000+ participants in PW Coding Contest</li>
              <li>⚡ Department Topper (2022–2026)</li>
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-2">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-1">Programming Languages</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>C++</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-1">Frameworks & Systems</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>React</li>
                  <li>Node.js & Express.js</li>
                  <li>REST API design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-1">Databases</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-1">Tools & Platforms</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Git, GitHub</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center relative inline-block after:content-[''] after:block after:w-24 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-2">
              Projects
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "URL Shortener Platform",
                  desc: "A secure MERN application featuring authentication, role-based access control, and optimized database queries.",
                  link: "https://github.com/Pankaj-70/url_shortener",
                },
                {
                  title: "Self-Hosting C++ Compiler",
                  desc: "A compiler capable of parsing, semantic analysis, and intermediate representation generation.",
                  link: "https://github.com/Pankaj-70/Compiler-project",
                },
                {
                  title: "Rainfall Prediction with ML",
                  desc: "Random Forest model achieving 92% accuracy, focusing on preprocessing and feature engineering.",
                  link: "https://github.com/Pankaj-70/Rainfall-Prection-Using-Machine-Learning",
                },
                {
                  title: "Gastron Delivery System",
                  desc: "A fault-tolerant delivery platform with real-time order tracking and scalable backend.",
                  link: "https://github.com/Pankaj-70/MINI_PROJECT",
                },
              ].map((proj, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-2">
              Contact
            </h2>
            <p className="text-gray-700 text-sm">
              📧 <a className="text-indigo-600 hover:underline" href="mailto:pankajsharma397050@gmail.com">pankajsharma397050@gmail.com</a>
            </p>
            <p className="text-gray-700 text-sm">
              📱 <a className="text-indigo-600 hover:underline" href="tel:+918595869664">+91 85958 69664</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Pankaj Sharma — Portfolio built with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
