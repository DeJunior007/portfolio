"use client";
import React from "react";
import { motion } from "framer-motion";
import { timelineItems, circleVariants } from "./config";

const About = () => {
  const skills = [
    { name: "Vue.js", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 80 },
    { name: "React/Next.js", level: 70 },
  ];

  return (
    <section className="min-h-full min-w-full">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-start mb-12">
          About My
        </h2>

        <article className="flex w-full justify-between">
          <div className="relative w-[70%]">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-feature" />

            {timelineItems.map((item, index) => (
              <div key={index} className="mb-12 flex items-start">
                <motion.div
                  className={`relative z-10 flex items-center bg-primary-light dark:bg-primary-dark justify-center w-16 h-16 rounded-full border-4 ${
                    item.status === "loading"
                      ? "border-feature border-t-transparent"
                      : "border-feature"
                  }`}
                  animate={item.status === "loading" ? "loading" : ""}
                  variants={circleVariants}
                >
                  {item.status === "completed" && (
                    <svg
                      className="w-8 h-8 text-feature"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </motion.div>

                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 w-[30%]">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {skill.name}
                </h3>
                <div className="relative w-full bg-gray-100 shadow rounded-lg h-4">
                  <motion.div
                    className="absolute top-0 left-0 h-4 rounded-lg bg-feature"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Proficiency</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
