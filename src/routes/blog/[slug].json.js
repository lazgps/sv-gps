import posts from '$lib/posts';

export function get({ params }) {
/*     if (params.slug in posts.filename) {
        return {
            body: posts[params.slug]
        };
    } */
    for(let i=0; i<posts.length; i++){
        if(posts[i]['filename'] === params.slug) {
            return {
                body: posts[i]
            };
        }
    }
    return { 
        status: 404
    };
}