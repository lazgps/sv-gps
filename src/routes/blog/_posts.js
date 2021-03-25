import fs from 'fs';
import fm from 'front-matter';
// import matter from 'gray-matter';
import marked from 'marked';
// let postDir = '../../../posts';
let postDir = '/posts';
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

marked.setOptions({
    gfm: true,
    breaks: true
});

function appendLeadZ(n) {
    if( n <=9) {
        return "0" + n;
    }
    return n
}

const posts = fs.readdirSync(postDir).map(postFilename => {
    const postContent = fs.readFileSync(`${postDir}/${postFilename}`, {
        encoding: 'utf8'
    });
    const postfm = fm(postContent);
    if (typeof postfm.attributes.slug === 'undefined')
        postfm.attributes.slug = postFilename.split('.').slice(0, -1).join('.');
    let tdate = new Date(postfm.attributes.date);
    postfm.attributes.date = months[tdate.getMonth()] + ' ' + tdate.getDate() + ' ' + tdate.getFullYear() + ' ' + tdate.getHours() + ':' + appendLeadZ(tdate.getMinutes());
    return {
            slug: postfm.attributes.slug,
            title: postfm.attributes.title,
            date: postfm.attributes.date,
            html: marked(postfm.body)
        }
});

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

/* const posts = [];
let postFile = fs.readdirSync(postDir);
postFile.forEach(postFile => {
    const fContents = fs.readFileSync(`${postDir}/${postFile}`, 'utf-8');
    const { body, ...frontMatter } = fm(fContents);
    const slug = postFile.split('.').slice(0, -1).join('.');
    const html = marked(body);
    // posts.push( slug, { ...frontMatter.attributes, html });
    posts.push(Object.create(slug, frontMatter.attributes));
}) */
// console.log(posts);
// console.log(Object.keys(posts));

export default posts;
