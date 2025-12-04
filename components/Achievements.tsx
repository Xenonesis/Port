"use client";

import React from "react";
import { achievements } from "@/data";
import { Sparkle } from "./ui/Sparkle";
import Reveal from "./ui/Reveal";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 w-full">
      <Reveal>
        <h3>
          My{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            achievements.
          </span>
        </h3>
      </Reveal>

      <div className="w-full mt-12 space-y-10">
        {achievements.map(({ id, title, organization, period, description }) => (
          <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
            <div className="p-3 md:p-5 lg:p-10">
              <div className="text-start">
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-lg lg:text-3xl font-extrabold">{title}</h4>
                    <p className="text-xl md:text-2xl font-bold mt-3">
                      <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
                        {organization}
                      </span>
                    </p>
                  </div>
                  <div className="text-end opacity-80">
                    <p>{period}</p>
                  </div>
                </div>
                <p className="my-5">{description}</p>
              </div>
            </div>
          </Sparkle>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
