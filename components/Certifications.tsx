"use client";

import React from "react";
import { certifications } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 w-full">
      <Reveal>
        <h3>
          My{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            certifications.
          </span>
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certifications.map(({ id, title, issuer, issueDate, status, viewLink }) => (
          <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
            <div className="p-5 h-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {status === "completed" ? "Completed" : "In Progress"}
                </span>
                <span className="text-sm opacity-60">{issueDate}</span>
              </div>

              <h4 className="text-lg font-bold mb-2">{title}</h4>
              <p className="text-sm opacity-80 mb-4">{issuer}</p>

              <div className="mt-auto flex gap-3">
                {viewLink && (
                  <a
                    href={viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition duration-200"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </Sparkle>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
