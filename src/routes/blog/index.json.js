import posts from '../../posts.js';

export function get() {
    return {
        body: Object.keys(posts).map(slug => ({
            slug,
            ...posts[slug]
        }))
    };
}
