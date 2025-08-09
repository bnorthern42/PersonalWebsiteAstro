export async function get() {
  // Simulate DB; could connect to SQLite/Node backend
  const projects = [
    { title: 'Custom Kernel Module for IO Optimization', description: 'Linux kernel module in C optimizing disk I/O; reduced latency by 40%. View on GitHub: https://github.com/your-repo' },
    { title: 'Backend API for Real-Time Data Service', description: 'Node.js/Express backend with PostgreSQL; handles 10k+ req/min via Redis. Integrated WebSockets.' },
    { title: 'Assembly-Based Game Engine Prototype', description: 'x86 assembly game loop for cycle-accurate perf; ported to ARM.' },
  ];
  return { body: JSON.stringify(projects) };
}