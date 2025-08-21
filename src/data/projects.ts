export default [
    {
        title: "DevDeck",
        description: "Multi-language scratchpad app (Qt/C++) with per-language build/run pipelines and session save/restore.",
        stack: ["C++", "Qt", "JSON"],
        source: "https://github.com/bnorthern42/DevDeck",
        demo: "",
        image: "/projects/devdeck.png"
    },
    {
        title: "Mini App Dashboard",
        description: "Next.js web app to create, edit, and run small apps right in the browser. Built-in code editor, instant preview (HTML, Python via Pyodide, Lua via Fengari), auth, and search; PostgreSQL storage planned.",
        stack: ["Next.js 14", "React", "TypeScript", "Monaco Editor", "Pyodide", "Fengari", "API Routes/Server Actions"],
        source: "https://github.com/bnorthern42/Mini-App-dashboard",
        demo: "",
        image: "/projects/madash.png"
    },
    {
        title: "CVE2DBMS",
        description: "Java Spring Boot application that ingests CVE data and stores it in a relational DBMS for streamlined search, filtering, and analysis.",
        stack: ["Java", "Spring Boot", "SQL", "CVE Database", "Microservices", "PostgreSQL"],
        source: "https://github.com/vercasm/CVE2DBMS",
        demo: "",
        image: "/projects/cve2dbms.png"
    },
    {
        title: "HeatMPI",
        description: "C++17 + MPI parallel 2D heat-equation solver comparing 1D row-wise vs 2D Cartesian decompositions. Demonstrates halo (ghost-cell) exchanges, multi-node runs, and timing/plotting for speedup.",
        stack: ["C++17", "OpenMPI", "Makefile", "Slurm"],
        source: "https://github.com/bnorthern42/HeatMPI",
        demo: "",
        image: "/projects/MPI2d.png"
    }

] as const;
