export const posts = import.meta.glob('/static/posts/*.md');
for (const path in posts) {
    posts[path]().then((mod) => {
        console.log(path, mod)
    })
}

