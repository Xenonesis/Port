"use client";

import React from "react";
import { blogPosts } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Blog = () => {
  return (
    <section id="blog" className="py-20 w-full">
      <Reveal>
        <h3>
          Latest{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            blog posts.
          </span>
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {blogPosts.map(({ id, title, description, link }) => (
          <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
            <div className="p-5 md:p-6 h-full flex flex-col">
              <h4 className="text-xl font-bold mb-3">{title}</h4>
              <p className="text-sm opacity-80 mb-6 flex-grow">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition duration-200 inline-block w-fit"
              >
                Read More →
              </a>
            </div>
          </Sparkle>
        ))}
      </div>
    </section>
  );
};

export default Blog;
