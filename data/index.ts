// TypeScript Interfaces
export interface Certification {
	id: number;
	title: string;
	issuer: string;
	issueDate: string;
	status: "completed" | "in-progress";
	viewLink?: string;
	downloadLink?: string;
}

export interface Achievement {
	id: number;
	title: string;
	organization: string;
	period: string;
	description: string;
}

export interface Testimonial {
	id: number;
	quote: string;
	author: string;
	role: string;
	profileLink?: string;
}

export interface BlogPost {
	id: number;
	title: string;
	description: string;
	link: string;
}

export interface CategorizedSkills {
	[category: string]: string[];
}

export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Certs", link: "#certifications" },
	{ name: "Achieve", link: "#achievements" },
	{ name: "Reviews", link: "#testimonials" },
	{ name: "Blog", link: "#blog" },
	{ name: "Work", link: "#experience" },
	{ name: "Contact", link: "#contact" },
];

export const personalInfo = {
	name: "Aditya Kumar Tiwari",
	title: "Cybersecurity Specialist & Full-Stack Developer",
	bio: "A passionate Cybersecurity Specialist and Full-Stack Developer who thrives at the intersection of technology and innovation, crafting secure and scalable solutions for real-world challenges. BCA in Cybersecurity from Sushant University. My mission is to combine security and creativity to build impactful digital experiences. 🔐",
	aboutBio: [
		"Hey! I'm Aditya, a Cybersecurity Specialist, Full-Stack Developer, and tech enthusiast passionate about building secure digital solutions.",
		"My background in cybersecurity and development gives me the tools to bring ideas to life securely. I love sharing my journey and helping others learn along the way.",
		"Got something in mind or just want to chat? Whether it's a security project, web app, or tech discussion, I'd love to connect!"
	],
	email: "itisaddy7@gmail.com",
	githubRepoLink: "https://github.com/Xenonesis/Port",
	personalSiteLink: "https://iaddy.netlify.app/",
	cvFileUrl: "assets/CV.pdf",
	cvFileName: "Aditya-Kumar-Tiwari-CV.pdf",
	contactText: "Let's build something secure together!",
};

export const myTechStack = [
	"Kali Linux",
	"Wireshark",
	"Metasploit",
	"Nmap",
	"Python",
	"JavaScript",
	"TypeScript",
	"C++",
	"Go",
	"SQL",
	"React",
	"Node.js",
	"Next.js",
	"TailwindCSS",
	"Laravel",
	"PHP",
	"Android",
	"Flutter",
	"Kotlin",
	"TensorFlow",
	"PyTorch",
	"Docker",
	"Kubernetes",
	"AWS",
	"Google Cloud",
	"Azure",
	"Linux",
];

export const projects = [
	{
		id: 1,
		title: "Budget-Buddy",
		description:
			"A modern, intelligent financial management application built with cutting-edge technologies. It combines beautiful UI/UX design with powerful AI-driven insights to help you make smarter financial decisions.",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		titleClassName: "justify-end",
		img: "https://raw.githubusercontent.com/Xenonesis/Budget-Buddy/main/public/preview.png",
		github: "https://github.com/Xenonesis/Budget-Buddy",
		link: "https://github.com/Xenonesis/Budget-Buddy",
		techs: [
			"TypeScript",
			"React",
			"Next.js",
			"TailwindCSS",
			"AI/ML",
		],
	},
	{
		id: 2,
		title: "Brave-Brain",
		description:
			"A powerful Android application designed to help users break free from digital addiction and regain control over their screen time. In our hyper-connected world, it's easy to fall into endless scrolling.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-start",
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		github: "https://github.com/Xenonesis/Brave-Brain",
		link: "https://github.com/Xenonesis/Brave-Brain",
		techs: ["Kotlin", "Android", "Flutter", "Java"],
	},
	{
		id: 3,
		title: "Tracy - OSINT Tool",
		description:
			"An Open Source Intelligence (OSINT) orchestrator that maps a target's digital footprint starting from an email and/or phone number. Runs concurrent, privacy-respecting checks across social platforms and breach sources.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
		github: "https://github.com/Xenonesis/tracy",
		link: "https://github.com/Xenonesis/tracy",
		techs: ["Python", "OSINT", "Security", "API"],
	},
	{
		id: 4,
		title: "E-Commerce Platform",
		description:
			"A full-featured e-commerce platform built with Laravel, featuring user authentication, payment integration, and admin dashboard. Perfect for showcasing modern PHP development.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["Laravel", "PHP", "MySQL", "Bootstrap"],
	},
	{
		id: 5,
		title: "Content Management System",
		description:
			"A robust CMS built with Laravel featuring role-based permissions, content scheduling, and SEO optimization. Demonstrates advanced Laravel concepts and best practices.",
		className: "md:col-span-3 md:row-span-2",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["Laravel", "PHP", "Blade", "MySQL", "TailwindCSS"],
	},
	{
		id: 6,
		title: "Portfolio Website",
		description:
			"A modern, responsive portfolio website built with Next.js and TailwindCSS. Features smooth animations, dark theme, and showcases projects and experience.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
		github: "https://github.com/Xenonesis/Port",
		link: "https://iaddy.netlify.app/",
		techs: ["TypeScript", "Next.js", "TailwindCSS", "React"],
	},
	{
		id: 7,
		title: "Developer Portfolios",
		description:
			"A curated collection of developer portfolio templates and inspiration. Helping developers showcase their work with modern, responsive designs.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		img: "https://i.pinimg.com/736x/8a/c5/b5/8ac5b5d5f3e8c8b8c8b8c8b8c8b8c8b8.jpg",
		github: "https://github.com/Xenonesis/developer-portfolios",
		link: "https://github.com/Xenonesis/developer-portfolios",
		techs: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		id: 8,
		title: "Code Guardian Report",
		description:
			"An automated code security analysis tool that scans repositories for vulnerabilities and generates comprehensive security reports.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/originals/2c/9a/ff/2c9aff8c8c8c8c8c8c8c8c8c8c8c8c8c.gif",
		github: "https://github.com/Xenonesis/code-guardian-report",
		link: "https://github.com/Xenonesis/code-guardian-report",
		techs: ["Python", "Security", "Automation", "API"],
	},
	{
		id: 9,
		title: "Network Scanner",
		description:
			"A comprehensive network scanning tool for security professionals. Identifies open ports, services, and potential vulnerabilities in network infrastructure.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		img: "https://i.pinimg.com/736x/5e/5e/5e/5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["Python", "Nmap", "Cybersecurity", "Networking"],
	},
	{
		id: 10,
		title: "Password Manager",
		description:
			"A secure, encrypted password manager with local storage. Features strong encryption, password generation, and secure clipboard handling.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/736x/3a/3a/3a/3a3a3a3a3a3a3a3a3a3a3a3a3a3a3a3a.jpg",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["Python", "Cryptography", "Security", "SQLite"],
	},
	{
		id: 11,
		title: "Chat Application",
		description:
			"A real-time chat application with end-to-end encryption. Features group chats, file sharing, and message persistence.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-start",
		img: "https://i.pinimg.com/originals/4b/4b/4b/4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b.gif",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["React", "Node.js", "Socket.io", "MongoDB"],
	},
	{
		id: 12,
		title: "Weather Dashboard",
		description:
			"A beautiful weather dashboard with real-time data, forecasts, and location-based weather alerts. Built with modern web technologies.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-center",
		img: "https://i.pinimg.com/736x/6c/6c/6c/6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c6c.jpg",
		github: "https://github.com/Xenonesis",
		link: "https://github.com/Xenonesis",
		techs: ["React", "API", "TailwindCSS", "TypeScript"],
	},
];

export const workExperience = [
	{
		id: 1,
		company: "Prarang",
		title: "Laravel Developer",
		desc: "Specialize in PHP and Laravel framework development for building robust web applications. Develop dynamic solutions using JavaScript and Python. Implement cloud computing solutions for scalable deployment.",
		className: "md:col-span-2",
		location: "Remote",
		period: "Sept 2025 - Oct 2025",
		skills: [
			"PHP",
			"Laravel",
			"JavaScript",
			"Python",
			"Cloud Computing",
		],
	},
	{
		id: 2,
		company: "JhaMobii Technologies Pvt. Ltd.",
		title: "Mentor (Part-time)",
		desc: "Provided technical mentorship in cybersecurity to junior professionals and interns. Guided team members through vulnerability assessments, threat analysis, and incident response strategies.",
		className: "md:col-span-2",
		location: "Remote",
		period: "Aug 2024 - Present",
		skills: [
			"Cybersecurity",
			"Mentorship",
			"Vulnerability Assessment",
			"Penetration Testing",
		],
	},
	{
		id: 3,
		company: "Null Community",
		title: "Cybersecurity Intern",
		desc: "Conducted vulnerability assessments and implemented robust network security protocols. Monitored network traffic and responded to security incidents with focus on intrusion detection.",
		className: "md:col-span-2",
		location: "Remote",
		period: "Jun 2024 - Present",
		skills: [
			"Vulnerability Assessment",
			"Network Security",
			"SIEM",
			"Incident Response",
		],
	},
	{
		id: 4,
		company: "Quantam Pvt. Ltd.",
		title: "Cybersecurity & AI/ML Intern",
		desc: "Focused on hands-on projects in cybersecurity and AI/ML, applying theoretical knowledge to real-world challenges. Enhanced understanding of cybersecurity protocols and data protection.",
		className: "md:col-span-2",
		location: "Gurugram, Haryana",
		period: "Oct 2024 - Present",
		skills: [
			"Cybersecurity",
			"AI/ML",
			"Data Protection",
			"Ethical Hacking",
		],
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "assets/git.svg",
		link: "https://github.com/Xenonesis",
	},
	{
		id: 2,
		img: "assets/linkedin.svg",
		link: "https://www.linkedin.com/in/itisaddy/",
	},
	{
		id: 3,
		img: "assets/web.svg",
		link: "https://iaddy.netlify.app/",
	},
	{
		id: 4,
		img: "assets/insta.svg",
		link: "https://www.instagram.com/i__aditya7/",
	},
];

export const skills = [
	"Python",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Laravel",
	"Cybersecurity",
	"AI/ML",
];

export const certifications: Certification[] = [
	{
		id: 1,
		title: "Google Cybersecurity Professional Certificate",
		issuer: "Google",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.coursera.org/professional-certificates/google-cybersecurity",
	},
	{
		id: 2,
		title: "Introduction to Cybersecurity",
		issuer: "Cisco",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.netacad.com/",
	},
	{
		id: 3,
		title: "Cybersecurity Essentials",
		issuer: "Cisco",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.netacad.com/",
	},
	{
		id: 4,
		title: "Software Security",
		issuer: "University of Maryland",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.coursera.org/learn/software-security",
	},
	{
		id: 5,
		title: "Usable Security",
		issuer: "University of Maryland",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.coursera.org/learn/usable-security",
	},
	{
		id: 6,
		title: "Hardware Security",
		issuer: "University of Maryland",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.coursera.org/learn/hardware-security",
	},
	{
		id: 7,
		title: "Python for Everybody",
		issuer: "University of Michigan",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.coursera.org/specializations/python",
	},
	{
		id: 8,
		title: "Web Development Fundamentals",
		issuer: "IBM",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.coursera.org/",
	},
	{
		id: 9,
		title: "Introduction to Cloud Computing",
		issuer: "IBM",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.coursera.org/",
	},
	{
		id: 10,
		title: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://aws.amazon.com/training/",
	},
	{
		id: 11,
		title: "Google IT Support Professional Certificate",
		issuer: "Google",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.coursera.org/professional-certificates/google-it-support",
	},
	{
		id: 12,
		title: "Ethical Hacking Essentials",
		issuer: "EC-Council",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.eccouncil.org/",
	},
	{
		id: 13,
		title: "Network Defense Essentials",
		issuer: "EC-Council",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.eccouncil.org/",
	},
	{
		id: 14,
		title: "Digital Forensics Essentials",
		issuer: "EC-Council",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.eccouncil.org/",
	},
	{
		id: 15,
		title: "JavaScript Algorithms and Data Structures",
		issuer: "freeCodeCamp",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.freecodecamp.org/",
	},
	{
		id: 16,
		title: "Responsive Web Design",
		issuer: "freeCodeCamp",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.freecodecamp.org/",
	},
	{
		id: 17,
		title: "Machine Learning Specialization",
		issuer: "Stanford University",
		issueDate: "2024",
		status: "in-progress",
		viewLink: "https://www.coursera.org/specializations/machine-learning-introduction",
	},
	{
		id: 18,
		title: "CompTIA Security+ (Prep)",
		issuer: "CompTIA",
		issueDate: "2024",
		status: "in-progress",
		viewLink: "https://www.comptia.org/certifications/security",
	},
	{
		id: 19,
		title: "Android App Development",
		issuer: "Google",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://developer.android.com/courses",
	},
	{
		id: 20,
		title: "React - The Complete Guide",
		issuer: "Udemy",
		issueDate: "2023",
		status: "completed",
		viewLink: "https://www.udemy.com/",
	},
	{
		id: 21,
		title: "Docker & Kubernetes: The Practical Guide",
		issuer: "Udemy",
		issueDate: "2024",
		status: "completed",
		viewLink: "https://www.udemy.com/",
	},
];

export const achievements: Achievement[] = [
	{
		id: 1,
		title: "University Sports Leader",
		organization: "Sushant University",
		period: "2022 - 2024",
		description: "Led university sports initiatives, organized inter-college tournaments, and promoted athletic participation among students. Coordinated with administration for sports events and facilities.",
	},
	{
		id: 2,
		title: "NSS Leader",
		organization: "National Service Scheme",
		period: "2022 - 2024",
		description: "Coordinated community service activities and volunteer programs. Organized blood donation camps, cleanliness drives, and awareness campaigns for social causes.",
	},
	{
		id: 3,
		title: "Subhead",
		organization: "Gaming Nexus",
		period: "2023 - Present",
		description: "Managing gaming community events and esports tournaments. Building an inclusive gaming community and organizing competitive gaming sessions.",
	},
];

export const testimonials: Testimonial[] = [
	{
		id: 1,
		quote: "Aditya demonstrates exceptional problem-solving skills and a deep understanding of cybersecurity concepts. His dedication to learning and applying security best practices is truly commendable.",
		author: "Dr. Rajesh Kumar",
		role: "Professor, Sushant University",
		profileLink: "https://www.linkedin.com/",
	},
	{
		id: 2,
		quote: "Working with Aditya has been a pleasure. His technical expertise in full-stack development combined with his security-first mindset makes him a valuable asset to any team.",
		author: "Priya Sharma",
		role: "Senior Developer, JhaMobii Technologies",
		profileLink: "https://www.linkedin.com/",
	},
	{
		id: 3,
		quote: "Aditya's mentorship has been instrumental in my growth as a cybersecurity professional. He explains complex concepts with clarity and patience.",
		author: "Rahul Verma",
		role: "Cybersecurity Intern",
		profileLink: "https://www.linkedin.com/",
	},
	{
		id: 4,
		quote: "His passion for technology and continuous learning is inspiring. Aditya consistently delivers high-quality work and brings innovative solutions to challenging problems.",
		author: "Amit Patel",
		role: "Tech Lead, Quantam Pvt. Ltd.",
		profileLink: "https://www.linkedin.com/",
	},
];

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: "Web Accessibility Basics",
		description: "Understanding the fundamentals of making websites accessible to everyone. Learn about WCAG guidelines, semantic HTML, ARIA labels, and best practices for inclusive web design.",
		link: "https://iaddy.netlify.app/blog/web-accessibility",
	},
	{
		id: 2,
		title: "Web Security Fundamentals",
		description: "Essential security practices every web developer should know. Covering OWASP Top 10, XSS prevention, CSRF protection, secure authentication, and input validation.",
		link: "https://iaddy.netlify.app/blog/web-security",
	},
	{
		id: 3,
		title: "The Rise of AI in Cybersecurity",
		description: "How artificial intelligence is transforming the cybersecurity landscape. Exploring AI-powered threat detection, automated incident response, and the future of security operations.",
		link: "https://iaddy.netlify.app/blog/ai-cybersecurity",
	},
];

export const categorizedSkills: CategorizedSkills = {
	Cybersecurity: [
		"Kali Linux",
		"Wireshark",
		"Metasploit",
		"Nmap",
		"Burp Suite",
		"OWASP",
		"Penetration Testing",
		"Vulnerability Assessment",
	],
	Programming: [
		"Python",
		"JavaScript",
		"TypeScript",
		"C++",
		"Go",
		"SQL",
		"Java",
	],
	"Web Development": [
		"React",
		"Next.js",
		"Node.js",
		"TailwindCSS",
		"Laravel",
		"PHP",
		"HTML/CSS",
	],
	"Mobile Development": [
		"Android",
		"Flutter",
		"Kotlin",
		"React Native",
	],
	"AI/ML": [
		"TensorFlow",
		"PyTorch",
		"Scikit-learn",
		"Machine Learning",
		"Deep Learning",
	],
	"Cloud & DevOps": [
		"Docker",
		"Kubernetes",
		"AWS",
		"Google Cloud",
		"Azure",
		"Linux",
		"CI/CD",
	],
};
