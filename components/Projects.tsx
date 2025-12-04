"use client";

import { useEffect, useState } from "react";
import { fetchGitHubProjects, Project } from "@/lib/github";
import { projects as fallbackProjects } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Reveal from "./ui/Reveal";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await fetchGitHubProjects();
        if (githubProjects.length > 0) {
          setProjects(githubProjects);
        } else {
          // Fallback to static data if GitHub fetch fails
          setProjects(fallbackProjects as unknown as Project[]);
        }
      } catch {
        setProjects(fallbackProjects as unknown as Project[]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20">
      <Reveal>
        <h3>
          Recent{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            projects.
          </span>
        </h3>
      </Reveal>

      {loading ? (
        <div className="w-full py-20 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
        </div>
      ) : (
        <BentoGrid className="w-full py-20">
          {projects.map((item) => (
            <BentoGridItem key={item.id} {...item} />
          ))}
        </BentoGrid>
      )}
    </section>
  );
};

export default Projects;
