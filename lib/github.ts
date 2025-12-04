export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  className: string;
  titleClassName: string;
  img: string;
  github: string;
  link: string;
  techs: string[];
  stars: number;
}

const GITHUB_USERNAME = "Xenonesis";

// Language to image mapping for project backgrounds
const languageImages: Record<string, string> = {
  TypeScript: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  JavaScript: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
  Python: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
  Kotlin: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
  Java: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  PHP: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
  HTML: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80",
  CSS: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80",
  Go: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  Rust: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  default: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
};

// Grid class patterns for bento layout
const gridClasses = [
  "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  "lg:col-span-2 md:col-span-3 md:row-span-2",
  "lg:col-span-2 md:col-span-3 md:row-span-2",
  "lg:col-span-2 md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-2",
  "lg:col-span-2 md:col-span-3 md:row-span-1",
];

const titleClasses = [
  "justify-end",
  "justify-start",
  "justify-center",
  "justify-start",
  "justify-center md:justify-start lg:justify-center",
  "justify-center",
];

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    // Fetch more repos to ensure we get the top starred ones after filtering
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&direction=desc&per_page=100&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and repos without descriptions, already sorted by stars from API
    const filteredRepos = repos
      .filter((repo) => !repo.fork && repo.description)
      .slice(0, 12);

    return filteredRepos.map((repo, index) => ({
      id: repo.id,
      title: formatRepoName(repo.name),
      description: repo.description || "No description available",
      className: gridClasses[index % gridClasses.length],
      titleClassName: titleClasses[index % titleClasses.length],
      img: languageImages[repo.language || "default"] || languageImages.default,
      github: repo.html_url,
      link: repo.homepage || repo.html_url,
      techs: getTechs(repo),
      stars: repo.stargazers_count,
    }));
  } catch (error) {
    console.error("Failed to fetch GitHub projects:", error);
    return [];
  }
}

function formatRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getTechs(repo: GitHubRepo): string[] {
  const techs: string[] = [];
  
  if (repo.language) {
    techs.push(repo.language);
  }
  
  // Add topics as techs (limit to 4)
  if (repo.topics?.length) {
    const topicTechs = repo.topics
      .slice(0, 4 - techs.length)
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1));
    techs.push(...topicTechs);
  }
  
  return techs.slice(0, 4);
}
