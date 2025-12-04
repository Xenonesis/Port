"use client";

import React from "react";
import { testimonials } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 w-full">
      <Reveal>
        <h3>
          What people{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            say.
          </span>
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {testimonials.map(({ id, quote, author, role, profileLink }) => (
          <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
            <div className="p-5 md:p-8 h-full flex flex-col">
              <div className="text-4xl text-purple opacity-50 mb-2">"</div>
              <p className="italic text-base md:text-lg mb-6 flex-grow">{quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-red-700 flex items-center justify-center text-white font-bold">
                  {author.charAt(0)}
                </div>
                <div>
                  {profileLink ? (
                    <a
                      href={profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-purple transition-colors"
                    >
                      {author}
                    </a>
                  ) : (
                    <p className="font-bold">{author}</p>
                  )}
                  <p className="text-sm opacity-70">{role}</p>
                </div>
              </div>
            </div>
          </Sparkle>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
