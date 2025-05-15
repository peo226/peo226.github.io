import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    // Use EmailJS to send the form data
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!, // Access service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, // Access template ID from .env
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID! // Access user ID from .env
      )
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });

          // Reset status after 3 seconds
          setTimeout(() => {
            setSubmitStatus("idle");
          }, 3000);
        },
        () => {
          setSubmitStatus("error");
          setTimeout(() => {
            setSubmitStatus("idle");
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-olive/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-olive/50 transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-olive/50 transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className={`w-full bg-olive text-white py-3 rounded-md transition-all ${submitStatus === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"}`}
              >
                {submitStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 text-green-800 px-4 py-2 rounded-md text-sm">
                  Your message was sent successfully. I'll get back to you soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 text-red-800 px-4 py-2 rounded-md text-sm">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6">
              Feel free to contact me directly through any of these channels. I'm always open to discussing new projects, opportunities, or just chatting about technology.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:princeomuyeh@gmail.com"
                className="flex items-center gap-3 p-3 bg-white rounded-md border border-border hover:shadow-md transition-shadow"
              >
                <div className="bg-olive/10 rounded-full p-2">
                  <Mail className="w-5 h-5 text-olive" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">princeomuyeh@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/prince-omuyeh-828517218/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-md border border-border hover:shadow-md transition-shadow"
              >
                <div className="bg-olive/10 rounded-full p-2">
                  <Linkedin className="w-5 h-5 text-olive" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">prince-omuyeh-828517218</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
