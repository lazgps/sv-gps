import fm from "front-matter";
import marked from "marked";
import { assets } from "$app/paths";


console.log(assets);

// const posts = getMarkdownFileContent("posts");
const allposts = import.meta.glob('/static/posts/*.md');
let list = [];
for (const path in allposts) {
  allposts[path]().then((mod) => {
    list.push({title: mod.attributes.title, path: path.replace("/static/posts","blog").replace(".md","")});
    list = list;
  })
}

console.log(list);

/* const test = Object.keys(posts).forEach(e => post[e]);

console.log(test);

export function get() {
    return {
        body: Object.keys(posts).map(slug => ({
            slug,
            ...posts[slug]
        }))
    };
} */
