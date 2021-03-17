import fs from 'fs';
import marked from 'marked';
import matter from 'gray-matter';
export let posts = [];

let postFile = fs.readdirSync('./static/posts/');
// console.log(postFile);
postFile.forEach(postFile => {
    const fileContents = fs.readFileSync('./static/posts/' + postFile, 'utf-8');
    // console.log(fileContents);
    const matterPost = matter(fileContents, { excerpt: true });
    matterPost.content = marked(matterPost.content)
    matterPost.excerpt = marked(matterPost.excerpt)
    posts.push(matterPost);
    // console.log(matterPost);
});

