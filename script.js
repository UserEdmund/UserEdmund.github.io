// SPA Section Switching
function showSection(sectionId) {
    const resume = document.getElementById('resume-page');
    const blog = document.getElementById('blog-page');
    
    if (sectionId === 'blog') {
        resume.classList.add('hidden-section');
        blog.classList.remove('hidden-section');
        blog.classList.add('fade-in');
        window.scrollTo(0, 0);
    } else {
        blog.classList.add('hidden-section');
        resume.classList.remove('hidden-section');
        resume.classList.add('fade-in');
        window.scrollTo(0, 0);
    }
}

// Blog Rendering
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('blog-container');
    
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'glass p-8 rounded-3xl hover:border-violet-500/40 transition duration-500';
        article.innerHTML = `
            <div class="flex gap-2 mb-4">
                ${post.tags.map(tag => `<span class="text-[10px] uppercase tracking-widest text-violet-400 bg-violet-400/10 px-2 py-1 rounded">${tag}</span>`).join('')}
            </div>
            <h3 class="text-2xl font-bold mb-2">${post.title}</h3>
            <p class="text-xs text-slate-500 font-mono mb-6">${post.date}</p>
            <p class="text-slate-400 leading-relaxed mb-6">${post.excerpt}</p>
            <div class="prose prose-invert max-w-none text-slate-300 hidden" id="content-${post.id}">
                ${marked.parse(post.content)}
            </div>
            <button onclick="toggleContent('${post.id}')" id="btn-${post.id}" class="text-sm font-bold text-blue-400 hover:text-white transition">READ FULL POST →</button>
        `;
        container.appendChild(article);
    });
});

function toggleContent(id) {
    const content = document.getElementById(`content-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const isHidden = content.classList.contains('hidden');
    
    content.classList.toggle('hidden');
    btn.innerText = isHidden ? "CLOSE POST ←" : "READ FULL POST →";
}