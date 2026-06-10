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

This work connected computer vision with a very physical robotics problem: keeping perception reliable when the environment is moving, reflective, and noisy.
        `
    }
];
