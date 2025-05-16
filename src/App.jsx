import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Hi, I'm Deena 👩‍💻</h1>
        <p className="text-lg mt-2 text-gray-700">Frontend Developer | React & Angular Enthusiast</p>
      </header>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React.js, Redux, Hooks</li>
          <li>Angular, TypeScript</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Git, REST APIs, Tailwind CSS</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          <li>
            <strong>Portfolio Website</strong> – This website showcasing my experience and skills.
          </li>
          <li>
            <strong>E-commerce Frontend</strong> – React + Redux project simulating a shopping experience.
          </li>
          <li>
            <strong>Admin Dashboard</strong> – Angular-based dashboard with charts and API integration.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form
          action="https://formspree.io/f/xvgaladv"
          method="POST"
          className="space-y-4 max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 border rounded h-24"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
