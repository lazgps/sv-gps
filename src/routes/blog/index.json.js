import posts from '$lib/posts';

export function get() {
    return {
        body: Object.keys(posts).map(slug => ({
          slug: posts[slug].filename,
          title: posts[slug].title,
          date: posts[slug].date,
          excerpt: posts[slug].excerpt,
          html: posts[slug].html 
        }))
    };
} 
