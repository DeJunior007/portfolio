// app/contact/config.js
import { createElement as e } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

export const primaryContactInfo = [
  {
    icon: () => e(FaEnvelope, { className: "w-6 h-6" }),
    title: "Email",
    value: "deilton.pedro@hotmail.com",
    link: "mailto:deilton.pedro@hotmail.com",
  },
  {
    icon: () => e(FaGithub, { className: "w-6 h-6" }),
    title: "GitHub",
    value: "DeJunior007",
    link: "https://github.com/DeJunior007",
  },
  {
    icon: () => e(FaLinkedinIn, { className: "w-6 h-6" }),
    title: "LinkedIn",
    value: "Deilton Pedro",
    link: "https://www.linkedin.com/in/deilton-pedro",
  },

  {
    icon: () => e(MdWork, { className: "w-6 h-6" }),
    title: "Experience",
    value: "Full Stack Developer",
    link: null,
  },
  {
    icon: () => e(IoSchool, { className: "w-6 h-6" }),
    title: "Education",
    value: "Systems Analysis and Development",
    link: null,
  },
  {
    icon: () => e(FaDownload, { className: "w-6 h-6" }),
    title: "Resume",
    value: "Download CV",
    link: "#", // Replace with your resume link
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
