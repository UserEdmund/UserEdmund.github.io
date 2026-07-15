const blogPosts = [
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

It is more a work of increasing recall in this specific circumstance. We don't want to miss any suspicous case of drowning in the distance, will still keeping the accuracy of the swimmers that are near. 
### Future work
I would say the use of monocular depth graph prediction method would be better to deal with this situation. With depth prediction plus object detection, it would be more precise than just using vanishing-point based depth estimation.
        `
    },
    {
        id: "thoughts-on-3dgs",
        title: "Thoughts on 3D Gaussian Splatting",
        date: "June 12, 2026",
        isoDate: "2026-06-12",
        tags: ["CG", "3DGS", "Research"],
        url: "blog/thoughts-on-3dgs.html",
        excerpt: "my own insights on 3dgs when doing related reseaches",
        content: `
        ### Still Working...
        `
    },
    {
        id: "thoughts-on-vibe-coding",
        title: "Thoughts on Vibe Coding",
        date: "July 2, 2026",
        isoDate: "2026-07-02",
        tags: ["AI", "ML", "Experiences"],
        url: "blog/thoughts-on-vibe-coding.html",
        excerpt: "my own insights on vibe coding and the use of AI and how AI is changing the industry",
        content: `
        This blog post is a mixture of random thoughts and useful(or maybe not) experiences that I have from using tons of AI coding tools.
        Actually, I was writing this while my AI coding assistant was helping me out with my projects. I guess that was something new only with AI coding agents. In the past I would have to write code with full attention, debugging and testing stuff.
        Now I can write my blogs while my AI is working, haha!
        Despite the convenience vibe coding brings, I still think that it is important to know what you are doing. If this is a little vague, then I would say you should at least know 70% of the code base that you are working on.
        For my own experience, AI coding agents are good at helping you run experiments, build environments, and even write some blocks of code. But when it comes to giving them a big project to work on, they tend to fail immediately. My personal preference when it comes to working with AI is that I would write the skeleton of the code, eg the functions, classes, high-level ideas of what this block of code should do, fancy data stuctures,
        and then let AI fill in the details. This way, not only I know how my code works in the big picture, the accuracy of the coding agents also increases by alot.

        Yeah, and this leads to my next thought on the impact of AI coding agents on the industry. I think that despite AI coding agents lowered the barrier to enter the coding world, real industrial-level code still need to be supervised by humans with real understanding of their fields. Code solely written by AI is no more than gambling. 
        I am not against the AI coding agents, and do not think that they will eventually replace human coders. In fact, I am very optimistic about the future of AI coding agents, and think that someday they will be able to acheive more and more complex tasks with greater accuracy and efficiency. 
        It is just that we need to be careful about using them. 

        And about how to prompt them, I usually make AI first explain the code to me and the overall logic and pipeline of the code, then ask it to write the code. I figure that this will make the code AI wrote better, and also help me to understand the things AI is doing. 
        `
    },
    {
        id: "ai-distillation-learning-method-for-desperate-students",
        title: "AI Distillation Learning Method for Desperate Students",
        date: "July 15, 2026",
        isoDate: "2026-07-15",
        tags: ["AI", "ML", "Finals", "Education"],
        url: "blog/ai-distillation-learning-method-for-desperate-students.html",
        excerpt: "Don't know how to study effectively for finals? Try distilling knowledge from AI to yourself!",
        content: `
        ### Introduction
        This is a method I found out during my studying of final in my bachelor years at CMU. When I saw the distillation method for AI models, I thought: "Hey, why not distill knowledge from AI to humans?"
        Traditional learning methods have numerous drawbacks. Textbook based learning is slow and inefficient, usually takes the learning days to converge. 
        And here it is, my magnificent distillation learning method for desperate students, and compared to other learning methods which involves working with AI, my experiment on myself shows that it roughly keeps my scores the same, but saves me ~2hr per subject.
        `
    }
];
