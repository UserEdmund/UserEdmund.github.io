document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Blog Posts
    const blogContainer = document.getElementById('blog-container');
    
    blogPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'glass p-8 rounded-3xl hover:border-blue-500/50 transition cursor-pointer group';
        postElement.innerHTML = `
            <p class="text-blue-400 text-xs font-mono mb-2">${post.date}</p>
            <h3 class="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">${post.title}</h3>
            <p class="text-slate-400 text-sm mb-6">${post.excerpt}</p>
            <div class="prose prose-invert hidden" id="post-${index}">
                ${marked.parse(post.content)}
            </div>
            <button onclick="togglePost(${index})" class="text-sm font-bold text-violet-400 uppercase tracking-widest">Read More +</button>
        `;
        blogContainer.appendChild(postElement);
    });

    // 2. Intersection Observer for Fade-in
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Toggle post visibility (Simple SPA logic)
function togglePost(index) {
    const content = document.getElementById(`post-${index}`);
    content.classList.toggle('hidden');
}