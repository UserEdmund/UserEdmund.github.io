const blogPosts = [
    {
        id: "risc-v-optimization",
        title: "Large Language Models on RISC-V Architecture",
        date: "August 15, 2024",
        isoDate: "2024-08-15",
        tags: ["LLM", "RISC-V", "C++"],
        url: "blog/risc-v-optimization.html",
        excerpt: "A deep dive into cross-compiling llama.cpp for specialized hardware and managing tight memory constraints.",
        content: `
### Overview
During my internship at **UltraRISC Technology**, I worked on hardware-software co-design for running language models on specialized systems.

### Key Technical Hurdles
1. **Cross-compilation**: Porting the \`llama.cpp\` library required custom build flags for the RISC-V ISA.
2. **Memory constraints**: Deploying LLMs on resource-limited systems meant using careful quantization and memory management.

The project gave me a sharper view of how model performance depends on the entire stack, from compiler flags to hardware architecture.
        `
    },
    {
        id: "computer-vision-research",
        title: "Vanishing Point Optimization in Object Detection",
        date: "June 1, 2024",
        isoDate: "2024-06-01",
        tags: ["CV", "AI", "Research"],
        url: "blog/computer-vision-research.html",
        excerpt: "How geometric priors can improve detection accuracy for an autonomous swimmer-following vehicle.",
        content: `
### Research at Fudan University
Working under Prof. Tun Lu, I explored how to help vehicles track swimmers more accurately over long distances.

The core idea was using **vanishing point-based optimization** during the Non-Maximum Suppression process. When objects are far from the camera, standard pixel-space assumptions become brittle; geometric context can help the detector make more stable decisions.

This work connected computer vision with a very physical robotics problem: keeping perception reliable when the environment is moving, reflective, and noisy.
        `
    }
];
