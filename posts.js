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
        Still Working...
        `
    }
];
