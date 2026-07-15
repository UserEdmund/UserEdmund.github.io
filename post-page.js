document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("post-root");

    if (!root || !Array.isArray(blogPosts)) {
        return;
    }

    const post = blogPosts.find((item) => item.id === root.dataset.postId);

    if (!post) {
        root.innerHTML = `
            <a class="back-link" href="../index.html#blog">Back to blog</a>
            <article class="post-article">
                <p class="eyebrow">Missing Post</p>
                <h1>Post not found</h1>
                <p class="lede">I don't recall that I've ever wrote this...</p>
            </article>
        `;
        return;
    }

    document.title = `${post.title} | Hongyi Qi`;

    let contentHtml;
    try {
        contentHtml = marked.parse(post.content.trim());
    } catch (e) {
        console.warn("Marked not available, falling back to plain text");
        contentHtml = `<pre style="white-space:pre-wrap;font-family:inherit">${post.content.trim()}</pre>`;
    }

    root.innerHTML = `
        <a class="back-link" href="../index.html#blog">Back to blog</a>
        <article class="post-article">
            <div class="post-tags">
                ${post.tags.map((tag) => `<span class="post-tag">${tag}</span>`).join("")}
            </div>
            <p class="post-date">${post.date}</p>
            <h1>${post.title}</h1>
            <p class="lede">${post.excerpt}</p>
            <div class="post-content">
                ${contentHtml}
            </div>
        </article>
    `;
});
