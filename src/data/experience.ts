export type ExperienceItem = {
    company: string;
    role: string;
    start: string; // e.g., "Aug 2022"
    end: string;   // e.g., "Present" or "Aug 2022"
    summary?: string;
    bullets?: string[];
};

const experience: ExperienceItem[] = [
    {
        company: "Tennessee Tech University",
        role: "Graduate Researcher",
        start: "Aug 2022",
        end: "Present",
        summary:
            "Designed, simulated, and secured distributed systems for electromagnetic wireless power transfer (WPT) using C++ with OpenMPI and Gmsh; implemented anti-tamper features and secure coding practices."
    },
    {
        company: "Code Club AB (Wurm Online)",
        role: "Game Developer",
        start: "Apr 2023",
        end: "Present",
        bullets: [
            "Spearheaded new feature integration, improving player engagement and satisfaction.",
            "Debugged & optimized large Java codebase, improving performance and UX.",
            "Built internal tools to simulate and debug PvP balancing algorithms."
        ]
    },
    {
        company: "Securonix",
        role: "SDET Intern",
        start: "Jun 2022",
        end: "Aug 2022",
        bullets: [
            "Automated RBAC tests for Snypr; cut env init time by ~50%.",
            "Authored `search-pdf-regex` (public NPM) to validate PDF content by user role."
        ]
    }
];

export default experience;
