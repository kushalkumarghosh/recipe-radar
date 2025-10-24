import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await fetch("https://getform.io/f/bolzjyoa", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  useEffect(() => {
    if (submitted) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for contacting us! We will get back to you shortly.",
        showConfirmButton: false,
        timer: 1500,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div name="contact" className="py-10 bg-white">
      <SectionTitle heading="Contact Us" />
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Contact Image */}
        <div className="md:w-1/2 w-full h-80 md:h-auto">
          <img
            src="https://i.ibb.co/yB7Smhr1/pexels-alex-andrews-271121-821754-removebg-preview.jpg"
            alt="Contact Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/*Contact Form */}
        <div className="md:w-1/2 w-full p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-400 hover:bg-slate-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
