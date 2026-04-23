const blogPosts = [
    {
        id: "risc-v-optimization",
        title: "Large Language Models on RISC-V Architecture",
        date: "August 15, 2024",
        tags: ["LLM", "RISC-V", "C++"],
        excerpt: "A deep dive into cross-compiling llama.cpp for specialized hardware and managing extreme memory constraints.",
        content: `
### Overview
During my internship at **UltraRISC Technology**, I worked on the cutting edge of hardware-software co-design[cite: 31].

### Key Technical Hurdles
1. **Cross-Compilation**: Porting the \`llama.cpp\` library required custom build flags for the RISC-V ISA.
2. **Memory Constraints**: Deploying LLMs on resource-limited systems meant implementing aggressive quantization.

I was able to successfully benchmark stable execution on these specialized environments[cite: 35].
        `
    },
    {
        id: "computer-vision-research",
        title: "Vanishing Point Optimization in Object Detection",
        date: "June 01, 2024",
        tags: ["CV", "AI", "Research"],
        excerpt: "How I used geometric priors to improve detection accuracy for the Autonomous Swimmer-following Vehicle.",
        content: `
### Research at Fudan University
Working under Prof. Tun Lu, I explored how to assist vehicles in tracking swimmers more accurately[cite: 19].

The core innovation was using **vanishing point-based optimization** during the Non-Maximum Suppression (NMS) process[cite: 22]. This significantly improved far-distance detection where standard pixels lose definition.
        `
    }
];