export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
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
