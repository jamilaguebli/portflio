import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import ContactText from "./ContactText";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_i08xvg5", // 🔴 replace with your Service ID
        "template_8tar7qj", // 🔴 replace with your Template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
        },
        "KnJ6G3OrIKfxQV4k9" // 🔴 replace with your Public Key
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitMessage("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        setTimeout(() => setSubmitMessage(""), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitMessage("Error sending message ❌");
      });
  };

  const contactItems = [
    {
      icon: <FiMail className="text-xl" />,
      text: "jamilaguebli02@gmail.com",
      href: "mailto:jamilaguebli02@gmail.com",
    },
    {
      icon: <FiPhone className="text-xl" />,
      text: "+216 25759338",
      href: "tel:25759338",
    },
    {
      icon: <FiGithub className="text-xl" />,
      text: "GitHub",
      href: "https://github.com/jamilaguebli",
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jamila-guebli-923ba5251",
    },
  ];

  return (
    <section id="contact" className="px-4 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="container flex flex-col items-center px-4 mx-auto">
            <div className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
              <ContactText />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-full bg-gray-800 group-hover:bg-[#99e7ff] transition-all">
                  {item.icon}
                </div>
                <p className="font-medium group-hover:text-[#99e7ff] transition-colors">
                  {item.text}
                </p>
              </motion.a>
            ))}

            <div className="pt-8 border-t border-gray-700">
              <h4 className="mb-4 text-xl font-semibold">
                Let&apos;s work together
              </h4>
              <p className="text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 border border-gray-700 shadow-xl bg-gray-800/50 backdrop-blur-sm rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#99e7ff]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#99e7ff]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#99e7ff]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-[#99e7ff]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center gap-2 py-3 rounded-lg font-medium transition ${
                  isSubmitting
                    ? "bg-gray-600"
                    : "bg-[#99e7ff] hover:opacity-90"
                }`}
              >
                <FiSend />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <p className="mt-4 text-center text-teal-400">
                  {submitMessage}
                </p>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
