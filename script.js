document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("blog-container");

    if (!container || !Array.isArray(blogPosts)) {
        return;
    }

    blogPosts.forEach((post) => {
        const article = document.createElement("article");
        article.className = "post-card";
        article.innerHTML = `
            <div class="post-tags">
                ${post.tags.map((tag) => `<span class="post-tag">${tag}</span>`).join("")}
            </div>
            <time datetime="${post.isoDate}">${post.date}</time>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a class="post-link" href="${post.url}">Read full post</a>
        `;
        container.appendChild(article);
    });
});
