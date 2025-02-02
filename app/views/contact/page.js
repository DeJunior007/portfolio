"use client";

import { createElement as e, Fragment } from "react";
import { motion } from "framer-motion";
import { primaryContactInfo, containerVariants, itemVariants } from "./config";

const ContactCard = ({ info }) => {
  return e(Fragment, null, [
    e(
      "div",
      {
        className: "flex justify-center mb-4",
        key: "icon-container",
      },
      [
        e(
          "div",
          {
            className:
              "p-3 bg-primary-light dark:bg-feature/10 rounded-full text-feature",
            key: "icon-wrapper",
          },
          [e(info.icon, { key: "icon" })]
        ),
      ]
    ),
    e(
      "h3",
      {
        className:
          "text-lg font-semibold text-aux-light dark:text-aux-dark mb-2",
        key: "title",
      },
      info.title
    ),
    e(
      "p",
      {
        className: "text-aux-light/80 dark:text-aux-dark/80",
        key: "value",
      },
      info.value
    ),
  ]);
};

const ContactGridSection = ({ items }) => {
  return e(
    motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-wrap gap-8 w-full", // Ensures full-width layout
    },
    items.map((info, index) => {
      const cardContent = e(ContactCard, {
        info,
        key: `card-content-${index}`,
      });

      return e(
        motion.div,
        {
          key: `item-${index}`,
          variants: itemVariants,
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          className: "flex-1 min-w-[300px] max-w-full group", // Flexible cards
        },
        info.link
          ? e(
              "a",
              {
                href: info.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "block p-6 bg-white dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-300",
              },
              cardContent
            )
          : e(
              "div",
              {
                className:
                  "p-6 bg-white dark:bg-primary-dark rounded-lg shadow-lg",
              },
              cardContent
            )
      );
    })
  );
};

const Contact = () => {
  return e(
    "section",
    {
      className: "py-16 bg-primary-light dark:bg-primary-dark w-full",
    },
    [
      e(
        "div",
        {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          key: "container",
        },
        [
          e(
            motion.div,
            {
              key: "header",
              initial: "hidden",
              animate: "visible",
              variants: containerVariants,
              className: "text-center mb-12",
            },
            [
              e(
                "h2",
                {
                  className:
                    "text-4xl font-bold text-aux-light dark:text-aux-dark mb-4",
                  key: "title",
                },
                "Get in Touch"
              ),
              e("div", {
                className: "h-1 w-20 bg-feature mx-auto rounded-full mb-8",
                key: "divider",
              }),
              e(
                "p",
                {
                  className:
                    "text-aux-light/80 dark:text-aux-dark/80 max-w-2xl mx-auto",
                  key: "description",
                },
                "Let's connect and discuss how we can work together."
              ),
            ]
          ),
          e(ContactGridSection, {
            key: "primary-contacts",
            items: primaryContactInfo,
          }),
        ]
      ),
    ]
  );
};

export default Contact;
